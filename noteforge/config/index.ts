import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "NoteForge",
  description: "The connected workspace where better, faster work happens.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
  keywords: [
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "blocknote",
    "edgestore",
    "shadcn",
    "shadcn-ui",
    "radix-ui",
    "cn",
    "clsx",
    "notion-clone",
    "convex",
    "sonner",
    "zustand",
    "zod",
    "sql",
    "postgresql",
    "aiven",
    "lucide-react",
    "next-themes",
    "postcss",
    "prettier",
    "react-dom",
    "tailwindcss",
    "tailwindcss-animate",
    "ui/ux",
    "js",
    "javascript",
    "typescript",
    "eslint",
    "html",
    "css",
  ] as Array<string>,
  authors: {
    name: "Atharva Sunil Deshmukh",
    url: "https://github.com/atharvadeshmukh07",
  },
} as const;

export const links = {
  sourceCode: "https://github.com/atharvadeshmukh07/NoteForge",
} as const;