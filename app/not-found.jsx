export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-7xl font-extrabold text-indigo-600">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-indigo-700 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
