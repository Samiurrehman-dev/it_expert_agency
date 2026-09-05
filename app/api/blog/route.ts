/** Lists blog posts. Query: page, limit, status, category/categoryId, sort. Response: { success, data|error }. */
import { listContent } from "@/lib/contentApi";
export async function GET(request: Request) {
  return listContent("blog", request);
}
