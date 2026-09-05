/** Changes only an ebook's status by numeric id. Body: { status }. Response: { success, data|error }. */
import { updateContentStatus } from "@/lib/contentApi";
export async function PATCH(
  request: Request,
  { params }: { params: { identifier: string } },
) {
  return updateContentStatus("ebook", request, params.identifier);
}
