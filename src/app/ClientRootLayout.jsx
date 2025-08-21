// app/ClientRootLayout.jsx (client)
"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientNavbar from "./components/ClientNavbar";
import { SessionProvider } from "next-auth/react";
import Footer from "./components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function ClientRootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProvider>
          <ClientNavbar />
          <main>{children}</main>
          <Footer></Footer>
        </SessionProvider>
      </body>
    </html>
  );
}
