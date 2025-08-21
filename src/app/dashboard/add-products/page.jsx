"use client";

import { useState } from "react";
import PrivateRoute from "@/app/components/PrivateRoute";
import Swal from "sweetalert2";

export default function AddProducts() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    details: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        await Swal.fire({
          icon: "success",
          title: "Product Added!",
          text: `Product "${formData.name}" was added successfully.`,
          confirmButtonColor: "#2563eb",
          background: document.documentElement.classList.contains("dark")
            ? "#1f2937"
            : "#fff",
          color: document.documentElement.classList.contains("dark")
            ? "#fff"
            : "#000",
        });
        setFormData({ name: "", price: "", details: "", image: "" });
      } else {
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.error || "Something went wrong!",
          confirmButtonColor: "#dc2626",
          background: document.documentElement.classList.contains("dark")
            ? "#1f2937"
            : "#fff",
          color: document.documentElement.classList.contains("dark")
            ? "#fff"
            : "#000",
        });
      }
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
    }

    setLoading(false);
  };

  return (
    <PrivateRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-28 px-4 md:px-8">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-400">
            Add Product
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 px-3 py-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 px-3 py-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
            
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Image Link
              </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 px-3 py-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter image URL"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Details
              </label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 px-3 py-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-700 dark:bg-blue-600 text-white py-2 rounded hover:bg-blue-800 dark:hover:bg-blue-700 flex items-center justify-center transition-colors"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                    ></path>
                  </svg>
                  Adding...
                </>
              ) : (
                "Add Product"
              )}
            </button>
          </form>
        </div>
      </div>
    </PrivateRoute>
  );
}
