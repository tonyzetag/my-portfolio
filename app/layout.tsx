import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jose Antonio - Portfolio",
  description: "Portfolio created like next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body>
        {/* Navbar */}
        <div className="fixed top-0 bg-red-500 h-16 w-full flex flex-auto items-center justify-center rounded-md shadow-md z-50">
          <span>Nav-Bar Example</span>
        </div>
        <div className="min-h-screen w-full top-0 left-0 right-0 bottom-0 bg-slate-50 flex flex-col flex-grow items-center justify-between pt-20">
          {/* Main */}
          {children}
          {/* Footer */}
          <div className="bg-cyan-500 h-16 w-full flex items-center justify-around rounded-md shadow-md">
            <span>Footer Example - item 1</span>
            <span>Footer Example - item 2</span>
          </div>
        </div>
      </body>
    </html>
  );
}
