import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@pilmin/ui";

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
        <Header />
        <main className="pt-14">{children}</main>
      </body>
    </html>
  );
}
