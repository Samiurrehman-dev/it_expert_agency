import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

import { Logo } from "./logo";

const footerColumns = [
  {
    title: "Core Services",
    links: [
      { label: "Managed IT Services", href: "/managed-it-services" },
      { label: "Cyber & Data Security", href: "/cyber-and-data-security" },
      { label: "IT Infrastructure", href: "/it-infrastructure" },
      { label: "Dedicated IT Support", href: "/#services" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Microsoft Solutions", href: "/microsoft-solutions" },
      { label: "AWS Solutions", href: "/aws-solutions" },
      { label: "Cloud Services", href: "/it-infrastructure" },
      { label: "Disaster Recovery", href: "/cyber-and-data-security" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/itexperts",
    icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/itexpertsagency",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/itexpertsagency",
    icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer className="bg-[#061832] text-slate-300">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_0.85fr_0.85fr] lg:gap-8">
          <div className="max-w-sm">
            <a href="/" aria-label="IT Experts home">
              <Logo light />
            </a>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              Proactive IT support, cybersecurity, and cloud expertise for
              businesses that need technology to stay secure, reliable, and
              ready to grow.
            </p>

            <div className="mt-6 grid gap-3 text-sm">
              <a
                href="tel:+19095456727"
                className="flex w-fit items-center gap-2.5 font-semibold text-slate-300 transition-colors hover:text-white"
              >
                <Phone className="size-4 text-accent-400" />
                +1 909 545 6727
              </a>
              <a
                href="mailto:support@itexpertsagency.com"
                className="flex w-fit items-center gap-2.5 font-semibold text-slate-300 transition-colors hover:text-white"
              >
                <Mail className="size-4 text-accent-400" />
                support@itexpertsagency.com
              </a>
            </div>

            <div className="mt-7 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-full border border-white/10 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-accent-400/50 hover:bg-white/5 hover:text-accent-300"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-extrabold tracking-wide text-white">
                {column.title}
              </h2>
              <nav className="mt-5 grid gap-3.5" aria-label={column.title}>
                {column.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex w-fit items-center gap-1 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3 -translate-x-1 translate-y-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} IT Experts Agency. All rights reserved.
          </p>
          <nav className="flex items-center gap-5" aria-label="Legal">
            <a
              href="/terms-of-use"
              className="transition-colors hover:text-slate-300"
            >
              Terms of Use
            </a>
            <a
              href="/privacy-policy"
              className="transition-colors hover:text-slate-300"
            >
              Privacy Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
