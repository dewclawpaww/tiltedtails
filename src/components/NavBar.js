"use client";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect screen size for mobile adjustments
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint if needed
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      {!isMobile && (
        <nav className="absolute top-0 left-0 right-0 flex justify-center py-4 bg-opacity-20 backdrop-blur-md z-10">
          <ul className="flex space-x-8 text-lg font-bold text-white neon-text">
            <li><a href="/" className="hover:text-red-400 transition-all">Home</a></li>
            <li><a href="/episodes" className="hover:text-blue-400 transition-all">Episodes</a></li>
            <li><a href="/merch" className="hover:text-green-400 transition-all">Merch</a></li>
            <li><a href="/characters" className="hover:text-purple-400 transition-all">Characters</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition-all">About</a></li>
          </ul>
        </nav>
      )}

      {/* Mobile Navigation - Console Overlay */}
      {isMobile && (
        <div className="absolute top-0 left-0 right-0 z-20">
          {/* Hamburger Button */}
          <button 
            className="absolute top-4 left-4 z-30 p-2 text-white bg-black bg-opacity-50 border border-gray-500 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Overlay Menu */}
          <div 
            className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center transition-all duration-300 transform ${
              menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
            style={{ backgroundImage: "url('/CRToverlay.png')", backgroundSize: "cover", backgroundBlendMode: "overlay" }}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-white text-xl"
              onClick={() => setMenuOpen(false)}
            >
              ✖
            </button>

            {/* Menu Items */}
            <ul className="space-y-6 text-2xl font-bold text-white neon-text text-center">
              <li><a href="/" className="hover:text-red-400 transition-all" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="/episodes" className="hover:text-blue-400 transition-all" onClick={() => setMenuOpen(false)}>Episodes</a></li>
              <li><a href="/merch" className="hover:text-green-400 transition-all" onClick={() => setMenuOpen(false)}>Merch</a></li>
              <li><a href="/characters" className="hover:text-purple-400 transition-all" onClick={() => setMenuOpen(false)}>Characters</a></li>
              <li><a href="/about" className="hover:text-yellow-400 transition-all" onClick={() => setMenuOpen(false)}>About</a></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
