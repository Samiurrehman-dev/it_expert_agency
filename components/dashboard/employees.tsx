/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { FormEvent, useEffect, useState } from "react";
import { Pencil, Plus, Trash2, X } from "lucide-react";
import { api, ConfirmModal, ErrorState, LoadingState, useToast } from "./ui";
import { PageHeading } from "./page-heading";
type U = {
  id: number;
  name: string;
  email: string;
  role: "ADMIN" | "EMPLOYEE";
  createdAt: string;
};
type L = { items: U[]; pagination: { totalPages: number } };
export function Employees({ me }: { me: number }) {
  const [items, setItems] = useState<U[]>([]),
    [edit, setEdit] = useState<U | null | undefined>(undefined),
    [remove, setRemove] = useState<U | null>(null),
    [loading, setLoading] = useState(true),
    [error, setError] = useState("");
  const toast = useToast();
  const load = async () => {
    setLoading(true);
    try {
      setItems((await api<L>("/api/users?limit=100")).items);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unable to load employees.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    void load();
  }, []);
  async function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body: Record<string, FormDataEntryValue | null> = {
      name: f.get("name"),
      email: f.get("email"),
      role: f.get("role"),
    };
    if (f.get("password")) body.password = f.get("password");
    try {
      await api(edit ? `/api/users/${edit.id}` : "/api/users/create", {
        method: edit ? "PUT" : "POST",
        body: JSON.stringify(body),
      });
      toast(edit ? "Team member updated." : "Team member added.");
      setEdit(undefined);
      void load();
    } catch (e) {
      toast(e instanceof Error ? e.message : "Save failed.", "error");
    }
  }
  async function del() {
    if (!remove) return;
    try {
      await api(`/api/users/${remove.id}`, { method: "DELETE" });
      toast("Team member deleted.");
      setRemove(null);
      void load();
    } catch (e) {
      toast(e instanceof Error ? e.message : "Delete failed.", "error");
    }
  }
  return (
    <>
      <PageHeading
        title="Employee Management"
        description="Manage portal access and roles. Passwords are never displayed."
        action={
          <button className="btn-primary" onClick={() => setEdit(null)}>
            <Plus className="size-4" />
            Add employee
          </button>
        }
      />
      {loading ? (
        <LoadingState />
      ) : error ? (
        <ErrorState message={error} retry={load} />
      ) : (
        <div className="dash-card overflow-x-auto">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-5 py-3">Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Joined</th>
                <th className="pr-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {items.map((u) => (
                <tr key={u.id}>
                  <td className="px-5 py-4 font-extrabold">
                    {u.name}
                    {u.id === me && (
                      <span className="ml-2 text-xs text-primary-600">You</span>
                    )}
                  </td>
                  <td>{u.email}</td>
                  <td>
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold">
                      {u.role}
                    </span>
                  </td>
                  <td>{new Date(u.createdAt).toLocaleDateString()}</td>
                  <td className="pr-5">
                    <div className="flex justify-end gap-2">
                      <button
                        className="rounded-lg border p-2"
                        onClick={() => setEdit(u)}
                      >
                        <Pencil className="size-4" />
                      </button>
                      <button
                        className="rounded-lg border p-2 text-red-600 disabled:opacity-30"
                        disabled={u.id === me}
                        title={
                          u.id === me
                            ? "You cannot delete your own account"
                            : "Delete"
                        }
                        onClick={() => setRemove(u)}
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {edit !== undefined && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/60 p-4">
          <form
            onSubmit={save}
            className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-soft"
          >
            <div className="flex justify-between">
              <h2 className="text-xl font-extrabold">
                {edit ? "Edit team member" : "Add employee"}
              </h2>
              <button type="button" onClick={() => setEdit(undefined)}>
                <X />
              </button>
            </div>
            <div className="mt-6 grid gap-4">
              <label>
                <span className="field-label">Name</span>
                <input
                  className="field"
                  name="name"
                  defaultValue={edit?.name}
                  required
                />
              </label>
              <label>
                <span className="field-label">Email</span>
                <input
                  className="field"
                  type="email"
                  name="email"
                  defaultValue={edit?.email}
                  required
                />
              </label>
              <label>
                <span className="field-label">Role</span>
                <select
                  className="field"
                  name="role"
                  defaultValue={edit?.role || "EMPLOYEE"}
                >
                  <option>EMPLOYEE</option>
                  <option>ADMIN</option>
                </select>
              </label>
              <label>
                <span className="field-label">
                  {edit ? "New password (optional)" : "Temporary password"}
                </span>
                <input
                  className="field"
                  type="password"
                  name="password"
                  minLength={8}
                  required={!edit}
                />
              </label>
              <button className="btn-primary mt-2">
                {edit ? "Save changes" : "Create account"}
              </button>
            </div>
          </form>
        </div>
      )}
      <ConfirmModal
        open={!!remove}
        title="Delete this team member?"
        description="This is permanent and may fail if they still own content."
        onCancel={() => setRemove(null)}
        onConfirm={del}
      />
    </>
  );
}
