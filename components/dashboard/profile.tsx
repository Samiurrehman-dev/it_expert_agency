"use client";
import { FormEvent } from "react";
import { PageHeading } from "./page-heading";
import { api, useToast } from "./ui";
type U = { id: number; name: string; email: string; role: string };
export function Profile({ user }: { user: U }) {
  const toast = useToast();
  async function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    try {
      await api(`/api/users/${user.id}`, {
        method: "PUT",
        body: JSON.stringify({ name: f.get("name") }),
      });
      toast("Profile updated.");
    } catch (e) {
      toast(e instanceof Error ? e.message : "Update failed.", "error");
    }
  }
  async function password(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("password") !== f.get("confirm")) {
      toast("New passwords do not match.", "error");
      return;
    }
    try {
      await api(`/api/users/${user.id}`, {
        method: "PUT",
        body: JSON.stringify({ password: f.get("password") }),
      });
      toast("Password changed.");
      e.currentTarget.reset();
    } catch (e) {
      toast(
        e instanceof Error ? e.message : "Password update failed.",
        "error",
      );
    }
  }
  return (
    <>
      <PageHeading
        title="My Profile"
        description="Review your account and security settings."
      />
      <div className="grid max-w-4xl gap-6 lg:grid-cols-2">
        <form
          onSubmit={save}
          className="dash-card grid content-start gap-5 p-6"
        >
          <h2 className="text-lg font-extrabold">Profile details</h2>
          <label>
            <span className="field-label">Name</span>
            <input
              className="field"
              name="name"
              defaultValue={user.name}
              required
            />
          </label>
          <label>
            <span className="field-label">Email</span>
            <input className="field bg-slate-50" value={user.email} disabled />
          </label>
          <label>
            <span className="field-label">Role</span>
            <input className="field bg-slate-50" value={user.role} disabled />
          </label>
          <button className="btn-primary">Save profile</button>
          {user.role !== "ADMIN" && (
            <p className="rounded-xl bg-amber-50 p-3 text-xs leading-5 text-amber-800">
              The current user update endpoint is ADMIN-only, so employee
              profile edits will be rejected by the API.
            </p>
          )}
        </form>
        <form
          onSubmit={password}
          className="dash-card grid content-start gap-5 p-6"
        >
          <h2 className="text-lg font-extrabold">Change password</h2>
          <p className="text-sm leading-6 text-slate-500">
            The current API accepts a new password but does not support
            validating the current password.
          </p>
          <label>
            <span className="field-label">New password</span>
            <input
              className="field"
              name="password"
              type="password"
              minLength={8}
              required
            />
          </label>
          <label>
            <span className="field-label">Confirm new password</span>
            <input
              className="field"
              name="confirm"
              type="password"
              minLength={8}
              required
            />
          </label>
          <button className="btn-primary">Change password</button>
        </form>
      </div>
    </>
  );
}
