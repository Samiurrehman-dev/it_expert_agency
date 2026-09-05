import { redirect } from "next/navigation";
import { getAuthenticatedUser } from "@/lib/apiAuth";
import { Overview } from "@/components/dashboard/overview";
export default async function Dashboard(){const user=await getAuthenticatedUser();if(!user)redirect("/login");return <Overview user={user}/>}
