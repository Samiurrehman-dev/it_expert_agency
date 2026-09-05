import { NextResponse } from "next/server";

export function apiSuccess<T>(data: T, status = 200) {
  return NextResponse.json({ success: true, data }, { status });
}

export function apiError(
  error: string,
  status = 500,
  fields?: Record<string, string[]>,
) {
  return NextResponse.json(
    { success: false, error, ...(fields ? { fields } : {}) },
    { status },
  );
}
