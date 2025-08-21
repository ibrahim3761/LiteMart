// app/components/FeaturedProducts.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const topProducts = data.slice(-6).reverse();
        setProducts(topProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <div className="loader border-4 border-blue-500 border-dashed rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  }

  if (!products.length)
    return <p className="text-center mt-10">No featured products yet.</p>;

  return (
    <section className="mt-12">
      <h2 className="text-2xl text-center font-bold mb-6 text-blue-700">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col"
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-2 rounded"
              />
            )}
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-sm mt-2 line-clamp-2">{product.details}</p>
            <Link
              href={`/products/${product._id}`}
              className="bg-blue-700 text-white py-1 px-2 rounded hover:bg-blue-800 text-center mt-4"
            >
              Show More
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link
          href="/products"
          className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800"
        >
          See All Products
        </Link>
      </div>
    </section>
  );
}
