import { NextResponse } from "next/server";

import { requireAuth } from "@/lib/apiAuth";
import { cloudinary } from "@/lib/cloudinary";
import { uploadBuffer } from "@/lib/cloudinaryUpload";

export const runtime = "nodejs";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const folders: Record<string, string> = {
  blog: "itexperts/blog-images",
  "case-study": "itexperts/case-study-images",
  ebook: "itexperts/ebook-images",
};

function hasValidImageSignature(bytes: Uint8Array, type: string) {
  if (type === "image/jpeg")
    return bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  if (type === "image/png")
    return bytes
      .slice(0, 8)
      .every(
        (byte, index) =>
          byte === [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a][index],
      );
  return (
    String.fromCharCode(...bytes.slice(0, 4)) === "RIFF" &&
    String.fromCharCode(...bytes.slice(8, 12)) === "WEBP"
  );
}

function failure(error: string, status: number) {
  return NextResponse.json({ success: false, error }, { status });
}

export async function POST(request: Request) {
  const authError = await requireAuth();
  if (authError) return authError;

  try {
    const form = await request.formData();
    const file = form.get("file");
    const contentType = String(form.get("contentType") || "");
    if (!(file instanceof File))
      return failure("Choose an image to upload.", 400);
    if (!allowedTypes.has(file.type))
      return failure("Image must be a JPG, PNG, or WebP file.", 415);
    if (file.size > MAX_IMAGE_SIZE)
      return failure("Image must be 5MB or smaller.", 413);
    const folder = folders[contentType];
    if (!folder) return failure("Invalid upload content type.", 400);

    // Originals are grouped by content type. The returned delivery URL adds
    // automatic format and quality selection without altering the source asset.
    const buffer = Buffer.from(await file.arrayBuffer());
    if (!hasValidImageSignature(buffer, file.type))
      return failure("The selected file is not a valid image.", 415);
    const uploaded = await uploadBuffer(buffer, {
      folder,
      resource_type: "image",
      use_filename: true,
      unique_filename: true,
    });
    const url = cloudinary.url(uploaded.public_id, {
      secure: true,
      resource_type: "image",
      fetch_format: "auto",
      quality: "auto",
    });
    return NextResponse.json({
      success: true,
      url,
      publicId: uploaded.public_id,
    });
  } catch (error) {
    console.error("Cloudinary image upload failed:", error);
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
    return failure("Image upload failed. Please try again.", 500);
  }
}
