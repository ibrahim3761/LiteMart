"use client";

export default function Banner() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-24 px-4 text-center overflow-hidden rounded-2xl">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      {/* Animated circles decoration */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/5"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="mb-6 flex justify-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 inline-flex items-center">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse mr-2"></span>
            <span className="text-sm font-medium">Summer Sale: Up to 50% Off</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400">LiteMart</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Discover amazing products at <span className="font-semibold">unbeatable prices</span> with fast shipping and easy returns.
        </p>
        
        <div className="flex justify-center">
          <a
            href="/products"
            className="group relative bg-white text-blue-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Explore Products
            <span className="absolute top-0 right-0 -mt-1 -mr-1 w-4 h-4 rounded-full bg-amber-400 animate-ping"></span>
            <span className="absolute top-0 right-0 -mt-1 -mr-1 w-4 h-4 rounded-full bg-amber-400"></span>
          </a>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M0,0V46.29c47.69,22.36,104.35,35.85,158,35.85,70.35,0,136.07-24.75,206-38.47,63.41-12.27,127.78-17.28,190-4.13,74.92,15.48,144.42,50.45,217,61.33,61.39,9.14,122.34-1.47,182-19.42,49.41-14.75,97.33-33.93,146-45.41,36.64-8.74,73.33-12.95,110-11.05V0Z"
            opacity=".25"
            className="fill-white"
          ></path>
          <path
            d="M0,0V15.81c47.69,22.36,104.35,35.85,158,35.85,70.35,0,136.07-24.75,206-38.47,63.41-12.27,127.78-17.28,190-4.13,74.92,15.48,144.42,50.45,217,61.33,61.39,9.14,122.34-1.47,182-19.42,49.41-14.75,97.33-33.93,146-45.41,36.64-8.74,73.33-12.95,110-11.05V0Z"
            opacity=".5"
            className="fill-white"
          ></path>
          <path
            d="M0,0V5.63c47.69,22.36,104.35,35.85,158,35.85,70.35,0,136.07-24.75,206-38.47,63.41-12.27,127.78-17.28,190-4.13,74.92,15.48,144.42,50.45,217,61.33,61.39,9.14,122.34-1.47,182-19.42,49.41-14.75,97.33-33.93,146-45.41,36.64-8.74,73.33-12.95,110-11.05V0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}