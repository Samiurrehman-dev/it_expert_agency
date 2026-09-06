"use client";

import { useState } from "react";
import { FileUploader } from "./file-uploader";

export function ContentBodyEditor({
  initialValue,
  contentType,
  required,
}: {
  initialValue: string;
  contentType: "blog" | "ebook";
  required?: boolean;
}) {
  const [body, setBody] = useState(initialValue);
  const [caption, setCaption] = useState("");
  const [message, setMessage] = useState("");

  function insertImage(url: string) {
    try {
      const parsed = JSON.parse(body || "{}") as Record<string, unknown>;
      const block = {
        type: "image",
        url,
        caption: caption.trim() || undefined,
      };
      const sections = Array.isArray(parsed.sections) ? parsed.sections : [];
      const target = sections.find(
        (section) =>
          section &&
          typeof section === "object" &&
          Array.isArray((section as { blocks?: unknown }).blocks),
      ) as { blocks: unknown[] } | undefined;
      if (target) target.blocks.push(block);
      else {
        const introBlocks = Array.isArray(parsed.introBlocks)
          ? parsed.introBlocks
          : [];
        introBlocks.push(block);
        parsed.introBlocks = introBlocks;
      }
      setBody(JSON.stringify(parsed, null, 2));
      setCaption("");
      setMessage("Image block added to the JSON body.");
    } catch {
      setMessage("Fix the Body JSON before adding an image block.");
    }
  }

  return (
    <div className="grid gap-4">
      <label>
        <span className="field-label">Body JSON</span>
        <textarea
          className="field min-h-80 font-mono text-xs leading-5"
          name="body"
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
            setMessage("");
          }}
          required={required}
        />
      </label>
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm font-extrabold text-slate-800">
          Add inline image block
        </p>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          The image is inserted into the first section with blocks, or into
          introBlocks.
        </p>
        <label className="mt-3 block">
          <span className="field-label">Caption (optional)</span>
          <input
            className="field"
            value={caption}
            onChange={(event) => setCaption(event.target.value)}
          />
        </label>
        <div className="mt-3">
          <FileUploader
            mode="image"
            contentType={contentType}
            value=""
            label="Inline image"
            onChange={(url) => insertImage(url)}
          />
        </div>
        {message && (
          <p className="mt-3 text-sm font-bold text-slate-700">{message}</p>
        )}
      </div>
    </div>
  );
}
