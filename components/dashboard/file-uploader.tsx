"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle2, FileText, UploadCloud } from "lucide-react";

type Props = {
  mode: "image" | "pdf";
  contentType: "blog" | "case-study" | "ebook";
  value: string;
  onChange: (
    url: string,
    details: { publicId: string; filename: string },
  ) => void;
  label: string;
  required?: boolean;
};

export function FileUploader({
  mode,
  contentType,
  value,
  onChange,
  label,
  required,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [filename, setFilename] = useState("");

  function upload(file?: File) {
    if (!file) return;
    setError("");
    setUploading(true);
    setProgress(0);
    const form = new FormData();
    form.set("file", file);
    form.set("contentType", contentType);
    const request = new XMLHttpRequest();
    request.open("POST", `/api/upload/${mode === "pdf" ? "pdf" : "image"}`);
    request.upload.onprogress = (event) => {
      if (event.lengthComputable)
        setProgress(Math.round((event.loaded / event.total) * 100));
    };
    request.onload = () => {
      try {
        const result = JSON.parse(request.responseText) as {
          success: boolean;
          url?: string;
          publicId?: string;
          error?: string;
        };
        if (
          request.status < 200 ||
          request.status >= 300 ||
          !result.success ||
          !result.url ||
          !result.publicId
        )
          throw new Error(result.error || "Upload failed.");
        setFilename(file.name);
        setProgress(100);
        onChange(result.url, {
          publicId: result.publicId,
          filename: file.name,
        });
      } catch (uploadError) {
        setError(
          uploadError instanceof Error ? uploadError.message : "Upload failed.",
        );
      } finally {
        setUploading(false);
      }
    };
    request.onerror = () => {
      setError("Network error. Check your connection and try again.");
      setUploading(false);
    };
    request.send(form);
  }

  return (
    <div className="grid gap-3">
      <div>
        <span className="field-label">{label}</span>
        <button
          type="button"
          disabled={uploading}
          onClick={() => inputRef.current?.click()}
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => {
            event.preventDefault();
            upload(event.dataTransfer.files[0]);
          }}
          className="flex min-h-28 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-4 text-center transition hover:border-primary-400 hover:bg-primary-50 disabled:opacity-60"
        >
          <UploadCloud className="mb-2 size-6 text-primary-700" />
          <span className="text-sm font-bold text-slate-700">
            {uploading
              ? `Uploading… ${progress}%`
              : value
                ? `Replace ${mode}`
                : `Choose or drop a ${mode}`}
          </span>
          <span className="mt-1 text-xs text-slate-500">
            {mode === "image"
              ? "JPG, PNG, or WebP · max 5MB"
              : "PDF only · max 20MB"}
          </span>
        </button>
        <input
          ref={inputRef}
          className="sr-only"
          type="file"
          required={required && !value}
          accept={
            mode === "image"
              ? "image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
              : "application/pdf,.pdf"
          }
          onChange={(event) => upload(event.target.files?.[0])}
        />
      </div>
      {uploading && (
        <div className="h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full bg-primary-600 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      {error && (
        <p role="alert" className="text-sm font-bold text-red-700">
          {error}
        </p>
      )}
      {mode === "image" && value && (
        <div className="relative aspect-[16/7] max-w-xl overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src={value}
            alt="Uploaded preview"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}
      {mode === "pdf" && value && (
        <a
          href={value}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm font-bold text-emerald-700 underline"
        >
          {filename ? (
            <CheckCircle2 className="size-4" />
          ) : (
            <FileText className="size-4" />
          )}
          {filename
            ? `File uploaded: ${filename}`
            : "View currently uploaded PDF"}
        </a>
      )}
    </div>
  );
}
