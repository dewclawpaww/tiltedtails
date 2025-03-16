import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden text-center">
      
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

      {/* Logo with Neon Glow Effect */}
      <img 
        src="/TiltedTailsLogoSMALL.png" 
        alt="Tilted Tails Logo" 
        className="w-[300px] md:w-[400px] lg:w-[500px] drop-shadow-lg filter contrast-150 brightness-125 
                   animate-pulse-neon mt-16"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center mt-6">
        {/* Title */}
        <h1 className="text-5xl font-bold text-white drop-shadow-md">
          Welcome to <span className="text-red-500">TiltedTails</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 mt-3 max-w-xl drop-shadow-md">
          Your destination for high-quality furry animation.
        </p>

        {/* SubscribeStar Button with Glitch Hover Effect */}
        <a href="https://www.subscribestar.adult/" target="_blank" rel="noopener noreferrer"
          className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-lg shadow-lg transition-all
          animate-pulse glitch-hover">
          Support Us on SubscribeStar
        </a>
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
