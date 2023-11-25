import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

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

const InterVariable = localFont({
  src: [
    {
      path: "../fonts/inter-variable.woff2",
      style: "normal",
    },
    {
      path: "../fonts/inter-variable-italic.woff2",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-inter-var",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${InterVariable.variable}`}>
      <body className="flex items-center justify-center px-8 lg:px-0">
        <main className="flex-auto min-w-0 max-w-4xl mt-16 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
