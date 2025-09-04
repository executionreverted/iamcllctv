import type { Metadata } from "next";
import "./globals.css";

// NonBureau font is now loaded via CSS @font-face declarations

export const metadata: Metadata = {
  metadataBase: new URL("https://iamcllctv.com"),
  title: {
    default: "IAMCLLCTV (i am collective)",
    template: "%s | IAMCLLCTV",
  },
  description:
    "A minimal, futuristic ‘Coming Soon’ presence for IAMCLLCTV (i am collective).",
  applicationName: "IAMCLLCTV",
  keywords: [
    "IAMCLLCTV",
    "i am collective",
    "creative",
    "coming soon",
    "design",
  ],
  openGraph: {
    type: "website",
    url: "/",
    title: "IAMCLLCTV (i am collective)",
    description:
      "A minimal, futuristic ‘Coming Soon’ presence for IAMCLLCTV (i am collective).",
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
    title: "IAMCLLCTV (i am collective)",
    description:
      "A minimal, futuristic ‘Coming Soon’ presence for IAMCLLCTV (i am collective).",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
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
