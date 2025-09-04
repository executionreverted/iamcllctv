import type { Metadata } from "next";
import "./globals.css";

// NonBureau font is now loaded via CSS @font-face declarations

export const metadata: Metadata = {
  metadataBase: new URL("https://iamcllctv.com"),
  title: {
    default: "IAMCLLCTV",
    template: "%s | IAMCLLCTV",
  },
  description:
    "A minimal, futuristic 'Coming Soon' presence for IAMCLLCTV.",
  applicationName: "IAMCLLCTV",
  keywords: [
    "IAMCLLCTV",
    "creative",
    "coming soon",
    "design",
    "collective",
  ],
  openGraph: {
    type: "website",
    url: "/",
    title: "IAMCLLCTV",
    description:
      "A minimal, futuristic 'Coming Soon' presence for IAMCLLCTV.",
    siteName: "IAMCLLCTV",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "IAMCLLCTV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IAMCLLCTV",
    description:
      "A minimal, futuristic 'Coming Soon' presence for IAMCLLCTV.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="bg-blobs" aria-hidden="true">
          <span className="blob blob-a" />
          <span className="blob blob-b" />
          <span className="blob blob-c" />
        </div>
        {children}
      </body>
    </html>
  );
}
