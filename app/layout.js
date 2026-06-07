import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata = {
  title: "Jqhxnn",
  description:
    "JavaScript developer learning Next.js. Building things to figure out how they work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}