/** Creates a case study from its schema fields; slug is optional. Response: { success, data|error }. */
import { createContent } from "@/lib/contentApi";
export async function POST(request: Request) {
  return createContent("case-study", request);
}
