import NavBar from "@/components/NavBar";

export default function Episodes() {
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
        <h1 className="text-5xl font-bold neon-text">Episodes</h1>
        <p className="text-lg text-gray-400 mt-2">Watch our latest furry animations.</p>

        {/* Episode List */}
        <div className="mt-10 w-full max-w-3xl space-y-8">
          
          {/* The Switch - Episode Series */}
          <div className="border border-gray-700 p-6 rounded-lg bg-gray-900 shadow-lg">
            <h2 className="text-3xl font-bold text-red-400">The Switch</h2>

            {/* Updated Description */}
            <p className="text-gray-300 mt-2">
              <strong>🌀 The Switch – Episode 1 Animatic</strong><br/>
              📍 <em>Retro-Futuristic 90s | Transformation | Mystery</em><br/><br/>
              When Paw and Belle stumble upon a mysterious <strong>occult toy</strong> in a hidden corner of a <strong>retro-futuristic shop</strong>, curiosity takes over. 
              But what starts as a harmless find quickly unravels into something <strong>far more intense</strong>. 
              Set within the cozy yet atmospheric confines of their apartment, <em>The Switch</em> blends <strong>warm nostalgia</strong> with <strong>gritty, pulse-raising tension</strong>—where every flicker of neon hides something unexpected.<br/><br/>
              Fans of <strong>furry transformation, dark expressive animation, and stylized 2.5D storytelling</strong> will feel right at home in this <strong>highly stylized, synth-infused world</strong>.
            </p>

            {/* Part 1 - Animatic */}
            <div className="mt-4 relative group w-full max-w-2xl">
              <h3 className="text-xl font-semibold text-yellow-400">Part 1 - Animatic</h3>
              <p className="text-gray-400">The first look at *The Switch* in animatic form.</p>

              {/* Thumbnail Container with Effects */}
              <a 
                href="https://static1.e621.net/data/sample/18/8b/188b81f955554ca9c6e1d21b7fd62482_720p.webm" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block mt-3 relative overflow-hidden rounded-lg"
              >
                {/* Video Thumbnail with Hover Effects */}
                <div className="relative w-full rounded-lg overflow-hidden transition-transform transform group-hover:scale-105">
                  <img 
                    src="/thumbnails/the-switch-thumb.png" 
                    alt="The Switch - Animatic Thumbnail" 
                    className="w-full rounded-lg shadow-lg brightness-90 group-hover:brightness-110"
                  />

                  {/* CRT Overlay - Properly Sized & Positioned */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity"
                    style={{
                      backgroundImage: "url('/CRToverlay.png')",
                      backgroundSize: "100% 100%", // Ensures it fully covers the thumbnail
                      backgroundRepeat: "no-repeat",
                      mixBlendMode: "overlay"
                    }}
                  ></div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/60 p-4 rounded-full">
                    <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-4.502-2.591A1 1 0 009 9.057v5.886a1 1 0 001.25.97l4.502-2.59a1 1 0 000-1.715z" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            {/* Future Parts (Placeholder for Now) */}
            <div className="mt-6 text-gray-500 italic">Part 2 and Part 3 coming soon...</div>
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
