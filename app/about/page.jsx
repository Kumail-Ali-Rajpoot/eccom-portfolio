import Navbar from "@/components/navbar"
import Footer from "@/components/footer";

export default function Page() {
  return (
    <>
    <Navbar></Navbar>
    <main className="bg-white min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">
          👋 About Halcyon Ali
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
          Welcome to <span className="font-semibold text-blue-600">Halcyon Ali</span> — a digital space where gaming meets simplicity.
          We offer clean, fast, and secure game downloads with a user-friendly experience.
          Whether you're here for classic setups or new indie titles, Halcyon is built with you in mind.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">💡 Our Mission</h2>
          <p className="text-gray-600">
            To deliver high-quality game setups and tools in the most efficient and user-friendly way possible.
            We believe in simplicity, speed, and safety for every gamer out there.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6 text-left">
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-blue-700 mb-2">🎮 What We Offer</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Fast game downloads</li>
              <li>Clean setups (no junk)</li>
              <li>Simple UI and experience</li>
              <li>Free and always available</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-green-700 mb-2">🌱 Who We Are</h3>
            <p className="text-gray-700">
              We're a small team of passionate web designers and gamers — working on Halcyon Ali to serve the community.
              This project started with a love for gaming and grew into a platform.
            </p>
          </div>
        </div>

        <p className="mt-12 text-gray-500 text-sm">
          Built with ❤️ by HalcyonAli. All rights reserved.
        </p>
      </div>
    </main>
    <Footer></Footer>
    </>
  );
}
