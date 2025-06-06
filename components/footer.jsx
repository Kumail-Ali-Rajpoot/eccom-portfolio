export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-4">
        <h2 className="text-2xl font-semibold tracking-wide">Portfolio</h2>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
