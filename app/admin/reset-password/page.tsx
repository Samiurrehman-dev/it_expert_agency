import { redirect } from "next/navigation";
export default function LegacyReset({searchParams}:{searchParams:{token?:string}}){redirect(`/reset-password${searchParams.token?`?token=${encodeURIComponent(searchParams.token)}`:""}`)}
