import "@/styles/globals.css";
import type { Metadata } from "next";

export const baseMetadata = {
  url: "https://jyao.me",
  title: "Jeffrey Yao",
  description: "Software enigneer, writer, and creator.",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseMetadata.url),
  title: {
    default: baseMetadata.title,
    template: `%s | ${baseMetadata.title}}`,
  },
  description: baseMetadata.description,
  openGraph: {
    title: baseMetadata.title,
    description: baseMetadata.description,
    url: baseMetadata.url,
    siteName: baseMetadata.title,
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: baseMetadata.title,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
