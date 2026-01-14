import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevConnect - The Social Network for Developers",
  description: "Connect, share code, collaborate, and grow your developer career",
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
