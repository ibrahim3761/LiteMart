"use client";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-12">
      <div className="mx-4 md:mx-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info with Logo */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <img 
              src="/litemartlogo.png" 
              alt="LiteMart Logo" 
              className="h-10 w-10 mr-3"
            />
            <h2 className="text-2xl font-bold">LiteMart</h2>
          </div>
          <p className="text-blue-200">
            Your trusted online shopping destination for quality products at affordable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col space-y-2">
            <a href="/" className="text-blue-200 hover:text-white transition-colors">
              Home
            </a>
            <a href="/products" className="text-blue-200 hover:text-white transition-colors">
              All Products
            </a>
            <a href="/about" className="text-blue-200 hover:text-white transition-colors">
              About Us
            </a>
            <a href="/contact" className="text-blue-200 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <div className="text-blue-200">
            <p>Email: support@litemart.com</p>
            <p className="mt-2">Phone: +8801881234567</p>
            <p className="mt-2">Hours: Mon-Fri, 9AM-9PM</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-6 border-t border-blue-700 text-center text-sm text-blue-200">
        <p>© {new Date().getFullYear()} LiteMart. All rights reserved.</p>
      </div>
    </footer>
  );
}