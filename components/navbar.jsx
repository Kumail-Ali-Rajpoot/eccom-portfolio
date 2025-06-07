'use client'
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";

export default function EcommerceHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">HalcyonAli</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <p className="hover:text-blue-600 transition"><Link href="/">Home</Link></p>
          <p className="hover:text-blue-600 transition"><Link href="/shop">Shop</Link></p>
          <p className="hover:text-blue-600 transition"><Link href="/about">About</Link></p>
          <p className="hover:text-blue-600 transition"><Link href="/contact">Contact</Link></p>
        </nav>

        {/* Cart & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <button className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">2</span>
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-2 px-4 py-4 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-600 transition">Home</a>
            <a href="#" className="hover:text-blue-600 transition">Shop</a>
            <a href="#" className="hover:text-blue-600 transition">About</a>
            <a href="#" className="hover:text-blue-600 transition">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
