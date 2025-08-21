// app/products/[id]/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import PrivateRoute from "@/app/components/PrivateRoute";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();

        if (!res.ok) {
          await Swal.fire({
            icon: "error",
            title: "Error",
            text: data.error || "Failed to fetch product",
            confirmButtonColor: "#dc2626",
            background: document.documentElement.classList.contains("dark")
              ? "#1f2937"
              : "#fff",
            color: document.documentElement.classList.contains("dark")
              ? "#fff"
              : "#000",
          });
          router.push("/products");
          return;
        }

        setProduct(data);
      } catch (err) {
        await Swal.fire({
          icon: "error",
          title: "Error",
          text: err.message,
          confirmButtonColor: "#dc2626",
          background: document.documentElement.classList.contains("dark")
            ? "#1f2937"
            : "#fff",
          color: document.documentElement.classList.contains("dark")
            ? "#fff"
            : "#000",
        });
        router.push("/products");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex justify-center items-center mt-28">
        <div className="flex flex-col items-center">
          <div className="loading loading-spinner loading-lg text-blue-600 dark:text-blue-400"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Loading product details...
          </p>
        </div>
      </div>
    );
  }

  if (!product) return null;

  return (
    <PrivateRoute>
      <div className="bg-gray-50 dark:bg-gray-900 pt-28 px-4 md:px-8">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <button
            onClick={() => router.back()}
            className="mb-6 flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Go back
          </button>

          <div className="flex flex-col md:flex-row gap-8">
            {product.image ? (
              <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-96 object-contain rounded"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U1ZTVlNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjM1ZW0iIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM5OTk5OTkiPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==";
                  }}
                />
              </div>
            ) : (
              <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>No image available</p>
                </div>
              </div>
            )}

            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h1 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                ${product.price}
              </p>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">
                  Product Details
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {product.details}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <button
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-lg transition-colors"
                  onClick={() => {
                    Swal.fire({
                      title: "Added to Cart!",
                      text: `${product.name} has been added to your cart.`,
                      icon: "success",
                      confirmButtonColor: "#2563eb",
                      background: document.documentElement.classList.contains(
                        "dark"
                      )
                        ? "#1f2937"
                        : "#fff",
                      color: document.documentElement.classList.contains("dark")
                        ? "#fff"
                        : "#000",
                    });
                  }}
                >
                  Add to Cart
                </button>

                <button
                  className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                  onClick={() => {
                    Swal.fire({
                      title: "Added to Wishlist!",
                      text: `${product.name} has been added to your wishlist.`,
                      icon: "info",
                      confirmButtonColor: "#2563eb",
                      background: document.documentElement.classList.contains(
                        "dark"
                      )
                        ? "#1f2937"
                        : "#fff",
                      color: document.documentElement.classList.contains("dark")
                        ? "#fff"
                        : "#000",
                    });
                  }}
                >
                  Save for Later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
}
