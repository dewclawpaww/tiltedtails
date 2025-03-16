import NavBar from "@/components/NavBar";

export default function About() {
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
        <h1 className="text-5xl font-bold neon-text">Welcome to TiltedTails</h1>
        <p className="text-lg text-gray-400 mt-2">A world of shadows, magic, and transformation.</p>

        {/* About Section */}
        <div className="mt-10 max-w-3xl text-gray-300 space-y-6 text-center">
          <p>
            <em>TiltedTails</em> is a <strong>high-quality, adult animated fantasy</strong>—a world where <strong>magic, occult forces, and vaporwave aesthetics</strong> collide with the eerie hum of <strong>retro tech noir</strong>.
          </p>
          <p>
            The <strong>mystery runs deep</strong>, hidden within flickering neon lights and forgotten rituals. Some seek <strong>power</strong>. Others crave <strong>escape</strong>. And for those who dare to cross the line... the transformation is inevitable.
          </p>
          <p>
            This is not just an animation. It’s a <strong>journey into the unknown</strong>—where the veil between reality and the surreal is razor-thin.
          </p>
        </div>

        {/* Membership Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-red-400">Unlock the Experience</h2>
          <p className="text-gray-400 mt-3">
            Gain <strong>exclusive access</strong> to early releases, behind-the-scenes content, and more.  
            Memberships are handled through <a href="https://www.patreon.com/" className="text-blue-400 hover:underline">Patreon</a> & <a href="https://www.subscribestar.adult/" className="text-blue-400 hover:underline">SubscribeStar</a>.
          </p>

          <div className="mt-6 flex justify-center space-x-6">
            <a href="https://www.patreon.com/" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg shadow-lg transition-all">
              Join on Patreon
            </a>
            <a href="https://www.subscribestar.adult/" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-lg shadow-lg transition-all">
              Join on SubscribeStar
            </a>
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
