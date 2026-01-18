import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "토론장 | 어드민",
  description: "토론장 Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
