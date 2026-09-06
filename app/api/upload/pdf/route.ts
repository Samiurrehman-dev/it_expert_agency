import { NextResponse } from "next/server";

import { requireAuth } from "@/lib/apiAuth";
import { uploadBuffer } from "@/lib/cloudinaryUpload";

export const runtime = "nodejs";
const MAX_PDF_SIZE = 20 * 1024 * 1024;

function failure(error: string, status: number) {
  return NextResponse.json({ success: false, error }, { status });
}

export async function POST(request: Request) {
  const authError = await requireAuth();
  if (authError) return authError;

  try {
    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File)) return failure("Choose a PDF to upload.", 400);
    if (
      file.type !== "application/pdf" ||
      !file.name.toLowerCase().endsWith(".pdf")
    )
      return failure("File must be a PDF.", 415);
    if (file.size > MAX_PDF_SIZE)
      return failure("PDF must be 20MB or smaller.", 413);

    // PDFs are raw assets so Cloudinary preserves the downloadable document;
    // they live separately from images in `itexperts/ebook-files`.
    const buffer = Buffer.from(await file.arrayBuffer());
    if (buffer.subarray(0, 5).toString("ascii") !== "%PDF-")
      return failure("The selected file is not a valid PDF.", 415);
    const uploaded = await uploadBuffer(buffer, {
      folder: "itexperts/ebook-files",
      resource_type: "raw",
      use_filename: true,
      unique_filename: true,
    });
    return NextResponse.json({
      success: true,
      url: uploaded.secure_url,
      publicId: uploaded.public_id,
    });
  } catch (error) {
    console.error("Cloudinary PDF upload failed:", error);
    if (
      error &&
      typeof error === "object" &&
      "http_code" in error &&
      error.http_code === 403
    )
      return failure(
        "Cloudinary rejected the upload. Verify the Cloudinary account email and confirm this is a Programmable Media product environment.",
        502,
      );
    return failure("PDF upload failed. Please try again.", 500);
  }
}
