/** Returns the logged-in user's id, name, email and role. Response: { success, data|error }. */
import { getAuthenticatedUser } from "@/lib/apiAuth";
import { apiError, apiSuccess } from "@/lib/apiResponse";

export async function GET() {
  const user = await getAuthenticatedUser();
  return user ? apiSuccess(user) : apiError("Authentication required.", 401);
}
