/** GET fetches by slug; PUT partially updates and DELETE archives by numeric id. Response: { success, data|error }. */
import {
  archiveContent,
  getContentBySlug,
  updateContent,
} from "@/lib/contentApi";
type Context = { params: { identifier: string } };
export async function GET(_request: Request, { params }: Context) {
  return getContentBySlug("blog", params.identifier);
}
export async function PUT(request: Request, { params }: Context) {
  return updateContent("blog", request, params.identifier);
}
export async function DELETE(_request: Request, { params }: Context) {
  return archiveContent("blog", params.identifier);
}
