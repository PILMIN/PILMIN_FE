import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@pilmin/ui";

export const metadata: Metadata = {
  title: "토론장",
  description: "실시간 찬반 투표로 의견을 나누는 토론 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header showTopicButton={true} />
        <main className="pt-14">{children}</main>
      </body>
    </html>
  );
}
