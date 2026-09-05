/** Lists ebooks. Query: page, limit, status, category/categoryId, sort. Response: { success, data|error }. */
import { listContent } from "@/lib/contentApi";
export async function GET(request: Request) {
  return listContent("ebook", request);
}
