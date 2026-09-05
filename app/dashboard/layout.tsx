import { redirect } from "next/navigation";
import { getAuthenticatedUser } from "@/lib/apiAuth";
import { DashboardShell } from "@/components/dashboard/shell";
import { ToastProvider } from "@/components/dashboard/ui";

export default async function DashboardLayout({children}:{children:React.ReactNode}){const user=await getAuthenticatedUser();if(!user)redirect("/login");return <ToastProvider><DashboardShell user={user}>{children}</DashboardShell></ToastProvider>}
