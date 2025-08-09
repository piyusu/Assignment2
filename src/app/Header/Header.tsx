"use client";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#171717] text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-lg font-semibold">ERICA JONES</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 text-sm tracking-wide">
        <li className="hover:text-gray-300 cursor-pointer">ABOUT ME</li>
        <li className="hover:text-gray-300 cursor-pointer">PORTFOLIO</li>
        <li className="hover:text-gray-300 cursor-pointer">SKILLS</li>
        <li className="hover:text-gray-300 cursor-pointer">SERVICES</li>
        <li className="hover:text-gray-300 cursor-pointer">TESTIMONIALS</li>
        <li>
          <button className="bg-[#f8f5ec] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#e7e4d8] transition">
            GET IN TOUCH
          </button>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#171717] flex flex-col items-center gap-6 py-8 text-sm tracking-wide z-50 md:hidden">
          <a href="#" className="hover:text-gray-300">
            ABOUT ME
          </a>
          <a href="#" className="hover:text-gray-300">
            PORTFOLIO
          </a>
          <a href="#" className="hover:text-gray-300">
            SKILLS
          </a>
          <a href="#" className="hover:text-gray-300">
            SERVICES
          </a>
          <a href="#" className="hover:text-gray-300">
            TESTIMONIALS
          </a>

          {/* Soft gradient glow */}
          <div className="relative flex justify-center w-full pt-6 pb-4">
            <div className="absolute inset-0 flex justify-center">
              <div className="w-60 h-32 bg-gradient-to-b from-[#9C356D] via-[#F9784C] to-[#FCD68B] rounded-full blur-3xl opacity-70"></div>
            </div>
            <button className="relative bg-[#f8f5ec] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#e7e4d8] transition z-10">
              GET IN TOUCH
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Header;
