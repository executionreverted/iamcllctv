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
    "Creative collective transforming ideas into digital experiences. From concept to launch, we craft memorable brands and websites.",
  applicationName: "IAMCLLCTV",
  keywords: [
    "IAMCLLCTV",
    "creative collective",
    "brand design",
    "web development",
    "digital agency",
    "creative studio",
    "branding",
    "website design",
  ],
  openGraph: {
    type: "website",
    url: "/",
    title: "IAMCLLCTV",
    description:
      "Creative collective transforming ideas into digital experiences. From concept to launch, we craft memorable brands and websites.",
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
      "Creative collective transforming ideas into digital experiences. From concept to launch, we craft memorable brands and websites.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/apple-touch-icon.png",
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
