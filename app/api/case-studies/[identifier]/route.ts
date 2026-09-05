/** GET fetches by slug; PUT partially updates and DELETE archives by numeric id. Response: { success, data|error }. */
import {
  archiveContent,
  getContentBySlug,
  updateContent,
} from "@/lib/contentApi";
type Context = { params: { identifier: string } };
export async function GET(_request: Request, { params }: Context) {
  return getContentBySlug("case-study", params.identifier);
}
export async function PUT(request: Request, { params }: Context) {
  return updateContent("case-study", request, params.identifier);
}
export async function DELETE(_request: Request, { params }: Context) {
  return archiveContent("case-study", params.identifier);
}
