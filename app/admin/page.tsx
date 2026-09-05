import { redirect } from "next/navigation";

import { getAuthenticatedUser } from "@/lib/apiAuth";

export default async function AdminPage() {
  const user = await getAuthenticatedUser();
  redirect(user ? "/dashboard" : "/login");
}
