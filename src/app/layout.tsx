import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "~/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  weight: ["300", "500"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: {
    default: "xulai · 开发者",
    template: "%s | xulai",
  },
  description: "xulai 的个人网站，记录博客与项目。",
  openGraph: {
    title: "xulai · 开发者",
    description: "记录博客与项目分享的个人网站。",
    url: "https://site.xulai.fun",
    siteName: "xulai",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "xulai 的个人网站",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "xulai · 开发者",
    description: "记录博客与项目分享的个人网站。",
    images: ["/logo.svg"],
  },
  metadataBase: new URL("https://xulai.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased`} >
        {children}
      </body>
    </html>
  );
}
