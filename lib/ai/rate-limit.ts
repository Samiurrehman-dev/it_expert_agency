const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const attempts = new Map<number, number[]>();

export function checkAiRateLimit(userId: number) {
  const now = Date.now();
  const recent = (attempts.get(userId) ?? []).filter(
    (time) => now - time < WINDOW_MS,
  );
  if (recent.length >= MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.ceil((WINDOW_MS - (now - recent[0])) / 1000),
    };
  }
  recent.push(now);
  attempts.set(userId, recent);
  return { allowed: true, retryAfter: 0 };
}
