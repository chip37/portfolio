import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chip Burlingham | Software Developer",
  description:
    "Professional developer portfolio for Chip Burlingham, focused on AI-powered business applications, manufacturing technology, and SaaS platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
