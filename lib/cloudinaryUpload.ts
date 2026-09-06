import type { UploadApiOptions, UploadApiResponse } from "cloudinary";

import { assertCloudinaryConfigured, cloudinary } from "@/lib/cloudinary";

export async function uploadBuffer(
  buffer: Buffer,
  options: UploadApiOptions,
): Promise<UploadApiResponse> {
  assertCloudinaryConfigured();
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      options,
      (error, result) => {
        if (error) reject(error);
        else if (result) resolve(result);
        else reject(new Error("Cloudinary returned no upload result."));
      },
    );
    stream.end(buffer);
  });
}
