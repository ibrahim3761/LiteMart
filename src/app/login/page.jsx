"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      // Redirect logged-in users to /products
      router.push("/products");
    }
  }, [session, router]);

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80 text-center mx-4">
        <h1 className="text-2xl font-bold mb-6 text-blue-700">Sign in to LiteMart</h1>
        <button
          onClick={() => signIn("google")}
          className="btn bg-blue-700 text-white w-full"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
