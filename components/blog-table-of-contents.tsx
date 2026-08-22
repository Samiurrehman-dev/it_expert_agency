"use client";

import { useEffect, useRef, useState } from "react";

type TableOfContentsSection = {
  id: string;
  title: string;
};

export function BlogTableOfContents({
  sections,
}: {
  sections: TableOfContentsSection[];
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      const readingLine = window.scrollY + 160;
      let currentId = sections[0]?.id ?? "";

      for (const section of sections) {
        const heading = document.getElementById(section.id);
        if (!heading || heading.offsetTop > readingLine) break;
        currentId = section.id;
      }

      setActiveId(currentId);
      frameId = 0;
    };

    const scheduleUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [sections]);

  useEffect(() => {
    const nav = navRef.current;
    const activeLink = nav?.querySelector<HTMLElement>(
      `[data-toc-id="${activeId}"]`,
    );

    if (!nav || !activeLink) return;

    const linkTop = activeLink.offsetTop;
    const linkBottom = linkTop + activeLink.offsetHeight;
    const visibleTop = nav.scrollTop + 64;
    const visibleBottom = nav.scrollTop + nav.clientHeight - 16;

    if (linkTop < visibleTop) {
      nav.scrollTo({ top: Math.max(0, linkTop - 80), behavior: "smooth" });
    } else if (linkBottom > visibleBottom) {
      nav.scrollTo({
        top: linkBottom - nav.clientHeight + 24,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  return (
    <nav
      ref={navRef}
      aria-label="On this page"
      className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto overscroll-contain rounded-3xl border border-slate-200 bg-white p-6 shadow-card"
    >
      <p className="sticky top-0 z-10 -mx-1 bg-white px-1 pb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-primary-700">
        On this page
      </p>
      <ol className="space-y-3 border-l border-primary-200 pl-4">
        {sections.map((section) => {
          const isActive = section.id === activeId;

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                data-toc-id={section.id}
                aria-current={isActive ? "location" : undefined}
                className={`relative block text-xs font-bold leading-5 transition-colors ${
                  isActive
                    ? "text-primary-800"
                    : "text-slate-500 hover:text-primary-800"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute -left-[1.0625rem] top-0.5 h-[calc(100%-0.25rem)] w-0.5 rounded-full bg-primary-500 transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                {section.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
