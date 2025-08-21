"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold">LiteMart</h2>
          <p className="text-sm mt-1">
            © {new Date().getFullYear()} LiteMart. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          <Link href="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-300">
            Products
          </Link>
          <Link href="/dashboard" className="hover:text-blue-300">
            Dashboard
          </Link>
          <Link href="/login" className="hover:text-blue-300">
            Login
          </Link>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-blue-200">
        Follow us on social media:  
        <a href="#" className="ml-2 hover:text-white">Facebook</a>,  
        <a href="#" className="ml-2 hover:text-white">Twitter</a>,  
        <a href="#" className="ml-2 hover:text-white">Instagram</a>
      </div>
    </footer>
  );
}
