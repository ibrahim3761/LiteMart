"use client";

import Link from "next/link";
import { useSession, signOut, SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  return (
    <SessionProvider>
      <NavbarContent />
    </SessionProvider>
  );
}

function NavbarContent() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/dashboard/add-products", label: "Dashboard", auth: true },
  ];

  const renderLinks = (isMobile = false) =>
    navLinks.map((link) => {
      if (link.auth && !session) return null; // only show if logged in
      const isActive = pathname === link.href;
      const baseClasses = "pb-1";
      const activeClasses = "text-blue-900 font-semibold border-b-2 border-blue-700";
      const inactiveClasses = "text-blue-700 hover:text-blue-500";
      const classes = `${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${isMobile ? "w-full block" : ""}`;

      return (
        <li key={link.href}>
          <Link href={link.href} className={classes}>
            {link.label}
          </Link>
        </li>
      );
    });

  return (
    <div className="navbar bg-white shadow-sm px-4 md:px-8 fixed top-0 z-50">
      {/* Navbar-start: Logo + Mobile */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden -ml-5">
          <div tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-white rounded-box w-52">
            {renderLinks(true)}
          </ul>
        </div>

        <Link href="/" className="text-2xl font-bold">
          <span className="text-blue-700">Lite</span>
          <span className="text-blue-900">Mart</span>
        </Link>
      </div>

      {/* Navbar-center: Desktop Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6">{renderLinks()}</ul>
      </div>

      {/* Navbar-end: Auth Button */}
      <div className="navbar-end">
        {!session ? (
          <Link href="/login" className="btn bg-blue-700 text-white sm:inline-flex">
            Login
          </Link>
        ) : (
          <button onClick={() => signOut()} className="btn bg-blue-700 text-white sm:inline-flex">
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
