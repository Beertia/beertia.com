import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beertia | Building digital products",
  description: "Beertia is a small studio of experienced designers and developers working closely with you to boost your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} sm:overflow-hidden`}>{children}</body>
    </html>
  );
}
