import NavBar from "@/components/NavBar";

export default function Merch() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white relative">
      
      {/* Background Gradient with Dark Purple Tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0826] via-black to-[#1a0826]"></div>

      {/* CRT Overlay Effect with Flicker */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15 animate-crt-flicker"
        style={{
          backgroundImage: "url('/CRToverlay.png')",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          mixBlendMode: "overlay"
        }}
      ></div>

      {/* Navigation Bar */}
      <NavBar />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center w-full mt-24 px-6 pb-16">
        
        {/* Page Title */}
        <h1 className="text-5xl font-bold neon-text">Merch Store</h1>
        <p className="text-lg text-gray-400 mt-2">Exclusive TiltedTails merch is on the way!</p>

        {/* Merch Grid - Adjusted for Mobile */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
          
          {/* Stickers - Coming Soon */}
          <div className="border border-gray-700 p-6 rounded-lg bg-gray-900 shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-gray-400">
              [Sticker Image]
            </div>
            <h2 className="text-xl font-bold text-white mt-4">Stickers</h2>
            <p className="text-gray-400 mt-2">Coming Soon!</p>
          </div>

          {/* Buttons - Coming Soon */}
          <div className="border border-gray-700 p-6 rounded-lg bg-gray-900 shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-gray-400">
              [Button Image]
            </div>
            <h2 className="text-xl font-bold text-white mt-4">Buttons</h2>
            <p className="text-gray-400 mt-2">Coming Soon!</p>
          </div>

          {/* Art Books - Coming Soon */}
          <div className="border border-gray-700 p-6 rounded-lg bg-gray-900 shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-gray-400">
              [Art Book Image]
            </div>
            <h2 className="text-xl font-bold text-white mt-4">Art Books</h2>
            <p className="text-gray-400 mt-2">Coming Soon!</p>
          </div>

          {/* Figurines - Future Plan (Now Full-Width on Mobile) */}
          <div className="border border-gray-700 p-6 rounded-lg bg-gray-900 shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl sm:col-span-2 lg:col-span-3">
            <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-gray-400">
              [Figurine Concept Image]
            </div>
            <h2 className="text-xl font-bold text-white mt-4">Figurines</h2>
            <p className="text-gray-400 mt-2">Planned for the future!</p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="w-full mt-12 py-6 bg-opacity-20 backdrop-blur-md text-white text-center border-t border-gray-700">
        <div className="flex flex-col items-center space-y-3">
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="https://twitter.com/tiltedtails" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all">Twitter</a>
            <a href="https://bsky.app/profile/dewram.bsky.social" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all">Bluesky</a>
            <a href="https://tiltedtails.social" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all">Discord</a>
          </div>

          {/* Contact Info */}
          <p className="text-sm text-gray-400">Contact: <a href="mailto:tiltedtails@protonmail.com" className="hover:text-blue-400">tiltedtails@protonmail.com</a></p>

          {/* Copyright */}
          <p className="text-sm text-gray-500">© 2025 TiltedTails. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
