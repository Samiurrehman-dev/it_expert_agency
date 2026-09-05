/** Lists case studies. Query: page, limit, status, category/categoryId, format, sort. Response: { success, data|error }. */
import { listContent } from "@/lib/contentApi";
export async function GET(request: Request) {
  return listContent("case-study", request);
}
