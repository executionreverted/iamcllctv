"use client";

import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import socials from "../socials.json";

type SocialKey = "instagram" | "twitter" | "github" | "linkedin";

const ICONS: Record<SocialKey, JSX.Element> = {
  instagram: <FaInstagram aria-label="Instagram" />,
  twitter: <FaTwitter aria-label="Twitter" />,
  github: <FaGithub aria-label="GitHub" />,
  linkedin: <FaLinkedin aria-label="LinkedIn" />,
};

export function Footer() {
  const entries = Object.entries(socials || {}) as Array<[
    SocialKey,
    string | undefined
  ]>;

  const year = new Date().getFullYear();

  return (
    <footer className="relative z-5 mt-24 w-full max-w-5xl px-6 mx-auto footer-wrap">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm">© {year} IAMCLLCTV. All rights reserved.</p>
        <nav className="flex items-center justify-center gap-4 text-xl">
          {entries
            .filter(([key, url]) => !!url && ICONS[key as SocialKey])
            .map(([key, url]) => (
              <a
                key={key}
                href={url as string}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 opacity-80 transition-opacity"
                aria-label={key}
              >
                {ICONS[key as SocialKey]}
              </a>
            ))}
        </nav>
      </div>
    </footer>
  );
}


