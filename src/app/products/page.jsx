"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader border-4 border-blue-500 border-dashed rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  }

  if (!products.length) {
    return <p className="text-center mt-20">No products found.</p>;
  }

  return (
    <div className="mt-28 mx-4 md:mx-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="border rounded-lg shadow hover:shadow-lg p-4 flex flex-col"
        >
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
          )}
          <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
          <p className="text-blue-700 font-bold mb-2">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.details}</p>
          <Link
            href={`/products/${product._id}`}
            className="mt-auto bg-blue-700 text-white py-2 rounded text-center hover:bg-blue-800"
          >
            Show More
          </Link>
        </div>
      ))}
    </div>
  );
}
