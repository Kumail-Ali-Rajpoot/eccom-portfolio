export default function ProductCard({src}) {
  return (
    <div className="max-w-sm mx-auto p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="w-full h-60 overflow-hidden rounded-xl">
        <img
          src={src}
          alt="Product"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800">Product Name</h2>
        <p className="text-gray-500 text-sm mt-1">
          Short description of the product goes here. Highlight key features.
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-gray-800">$49.99</span>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z" />
              </svg>
            ))}
          </div>
        </div>

        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
