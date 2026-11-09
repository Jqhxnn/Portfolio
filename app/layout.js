import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata = {
  title: "Jqhxnn - Portfolio",
  description:
    "JavaScript developer from Germany learning Next.js. Building things to figure out how they work.",
    keywords: [
        "johann",
        "jqhxnn",
        "jq",
        "jqhxnn portfolio",
        "johann portfolio",
    ],
    authors: [{ name: "Jqhxnn" }],
    creator: "johann",
    publisher: "jqhxnn.me",
    icons: {
        icon: [{ url: "/logo.webp", type: "image/webp", sizes: "any" }],
        shortcut: "/logo.webp",
        apple: [{ url: "/logo.webp", sizes: "2048x2048", type: "image/webp" }],
    },
    openGraph: {
        type: "website",
        url: "https://jqhxnn.me",
        siteName: "jqhxnn",
        title: "Jqhxnn - Portfolio",
        description:
            "JavaScript developer from Germany learning Next.js. Building things to figure out how they work.",
        images: [
            {
                url: "/logo.webp",
                width: 2048,
                height: 2048,
                alt: "jqhxnn logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Jqhxnn - Portfolio",
        description:
            "JavaScript developer from Germany learning Next.js. Building things to figure out how they work.",
        images: ["/logo.webp"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}