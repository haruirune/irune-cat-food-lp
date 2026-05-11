import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "irune | cat food",
  description:
    "irune new full album cat food and full album cat food release party special site.",
  openGraph: {
    title: "irune | cat food",
    description:
      "New full album cat food out 2026.06.22. Release party at Daikanyama SPACE ODD on 2026.07.01.",
    images: ["/images/artist.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
