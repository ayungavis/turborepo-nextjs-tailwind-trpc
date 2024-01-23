import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { cn } from "@acme/ui";
import { ThemeProvider, ThemeToggle } from "@acme/ui/theme";
import { Toaster } from "@acme/ui/toast";

import { env } from "~/env";
import { TRPCReactProvider } from "~/trpc/react";

import "~/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://github.com/ayungavis/turborepo-nextjs-tailwind-trpc"
      : "http://localhost:3000",
  ),
  title: "Turborepo Boilerplate",
  description: "Simple monorepo with shared backend for web & mobile apps",
  openGraph: {
    title: "Turborepo Boilerplate",
    description: "Simple monorepo with shared backend for web & mobile apps",
    url: "https://github.com/ayungavis/turborepo-nextjs-tailwind-trpc",
    siteName: "Turborepo Boilerplate",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ayungavis",
    creator: "@ayungavis",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TRPCReactProvider>{props.children}</TRPCReactProvider>
          <div className="absolute bottom-4 right-4">
            <ThemeToggle />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
