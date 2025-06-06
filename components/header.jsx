import React from 'react'

function header() {
  return (
    <section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Discover the Latest in Fashion
      </h1>
      <p className="mt-4 text-gray-600 text-lg">
        Upgrade your wardrobe with our newest arrivals. Stylish, comfortable, and affordable.
      </p>
      <div className="mt-6 flex space-x-4">
        <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          Shop Now
        </a>
        <a href="#" className="text-blue-600 font-medium hover:underline">Learn More</a>
      </div>
    </div>

    <div className="relative">
      <img
        src="https://th.bing.com/th/id/OIP.3iAJkgNhC-55mGZjdC-I7QHaMs?w=184&h=317&c=7&r=0&o=5&pid=1.7"
        alt="Featured Product"
        className="w-full h-[20rem] rounded-xl object-contain "
      />
    </div>
  </div>
</section>

  )
}

export default header