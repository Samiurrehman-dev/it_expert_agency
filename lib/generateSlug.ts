export function generateSlug(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 191)
    .replace(/-+$/g, "");
}

export async function generateUniqueSlug(
  requestedSlug: string | undefined,
  title: string,
  exists: (slug: string) => Promise<boolean>,
  excludeSlug?: string,
): Promise<string> {
  const base = generateSlug(requestedSlug || title) || "untitled";
  let candidate = base;
  let suffix = 2;

  while (candidate !== excludeSlug && (await exists(candidate))) {
    const ending = `-${suffix++}`;
    candidate = `${base.slice(0, 191 - ending.length)}${ending}`;
  }

  return candidate;
}
