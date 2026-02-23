"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Exact Font Match */}
          <div >
            <Link href="/" className="text-4xl font-['Playball'] ">
              <span className="text-[#d4a762]">Cater</span>
              <span className="text-gray-900">Serv</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-[#ffb600] font-semibold">
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 font-semibold hover:text-[#ffb600] transition"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 font-semibold hover:text-[#ffb600] transition"
            >
              Services
            </Link>
            <Link
              href="/events"
              className="text-gray-700 font-semibold hover:text-[#ffb600] transition"
            >
              Events
            </Link>
            <Link
              href="/menu"
              className="text-gray-700 font-semibold hover:text-[#ffb600] transition"
            >
              Menu
            </Link>

            <div className="relative group py-2 cursor-pointer">
              <span className="text-gray-700 font-semibold hover:text-[#ffb600] transition flex items-center">
                Pages <ChevronDown size={16} className="ml-1" />
              </span>
              <div className="absolute top-full left-0 bg-gray-50 shadow-lg min-w-[150px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  href="/booking"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#ffb600] hover:text-white"
                >
                  Booking
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#ffb600] hover:text-white"
                >
                  Our Blog
                </Link>
                <Link
                  href="/team"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#ffb600] hover:text-white"
                >
                  Our Team
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="text-gray-700 font-semibold hover:text-[#ffb600] transition"
            >
              Contact
            </Link>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button className="w-10 h-10 bg-[#d4a762] text-white rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-[#d4a762] transition">
                <Search size={18} />
              </button>
              <button className="bg-[#d4a762] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-gray-900 hover:text-[#d4a762] transition">
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-[#ffb600] border border-[#ffb600] p-1 rounded"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </div>
  );
}
