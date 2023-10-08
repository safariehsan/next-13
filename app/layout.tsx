import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" date-theme="forest">
      <body className={inter.className}>
        <Navbar />
        <main className="p-4">
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-md"></span>
            }
          >
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  );
}
