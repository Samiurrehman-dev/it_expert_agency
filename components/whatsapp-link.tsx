import type { MouseEventHandler } from "react";

import { WHATSAPP_URL } from "@/lib/contact";

type WhatsAppLinkProps = {
  variant?: "contact" | "header" | "mobile";
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.75 13.96c-.25-.13-1.47-.72-1.7-.81-.22-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43H7.8c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.57.13.17 1.75 2.67 4.24 3.74.59.26 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3m-4.74 7.75h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.23-.38a9.86 9.86 0 0 1-1.51-5.26C2.13 6.36 6.57 1.92 12.03 1.92c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 7c-.01 5.45-4.45 9.89-9.9 9.89m8.42-18.31A11.8 11.8 0 0 0 12.02 0C5.4 0 .01 5.39 0 12c0 2.12.55 4.19 1.6 6.01L0 24l6.13-1.61A12 12 0 0 0 12.01 24c6.62 0 12-5.38 12-12 0-3.21-1.25-6.23-3.57-8.5" />
    </svg>
  );
}

export function WhatsAppLink({
  variant = "contact",
  onClick,
}: WhatsAppLinkProps) {
  const className =
    variant === "contact"
      ? "inline-flex h-12 items-center gap-2.5 justify-self-start rounded-full bg-[#25D366] px-4 text-white shadow-card transition-all duration-300 hover:shadow-soft motion-safe:hover:scale-105"
      : variant === "mobile"
        ? "mb-4 flex items-center justify-center gap-2 text-sm font-extrabold text-[#25D366] transition-colors hover:text-[#20bd5a]"
        : "hidden items-center gap-2 whitespace-nowrap text-sm font-extrabold text-[#25D366] transition-colors hover:text-[#20bd5a] xl:flex";

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="WhatsApp"
      className={className}
      onClick={onClick}
    >
      <WhatsAppIcon className={variant === "contact" ? "size-6" : "size-4"} />
      <span className="text-sm font-extrabold">WhatsApp</span>
    </a>
  );
}
