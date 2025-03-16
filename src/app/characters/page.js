"use client";
import { useState } from "react";
import NavBar from "@/components/NavBar";

function CharacterCard({ name, species, height, imgSrc, bio }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className="border border-gray-700 p-6 rounded-lg bg-gray-900 shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:brightness-110 w-full max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
    >
      {/* Character Image */}
      <div className="w-40 h-40 bg-gray-700 rounded-full overflow-hidden flex items-center justify-center">
        <img src={imgSrc} alt={`${name} Image`} className="w-full h-full object-cover" />
      </div>

      {/* Character Name */}
      <h2 className="text-2xl font-bold text-white mt-4">{name}</h2>
      <p className="text-gray-400">{species} | {height}</p>

      {/* Expandable Bio with Enhanced Animation */}
      <button
        className="mt-3 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Hide Bio" : "Read Bio"}
      </button>

      <div
        className={`mt-4 text-gray-300 text-left overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
          expanded ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="leading-relaxed mt-2">{bio}</p>
      </div>
    </div>
  );
}

export default function Characters() {
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
        <h1 className="text-5xl font-bold neon-text">Characters</h1>
        <p className="text-lg text-gray-400 mt-2">Meet the cast of TiltedTails.</p>

        {/* Character Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">

          {/* Paw */}
          <CharacterCard
            name="Paw"
            species="Fox (Male)"
            height="5'4"
            imgSrc="/characters/paw.png"
            bio="Paw is the kind of fox who always lands on his feet—whether by skill or sheer dumb luck. 
            The runt of his litter and the only boy among seven sisters, he learned fast how to stay sharp, 
            talk smooth, and slip out of trouble before it caught up to him. With his sleek, punkish style 
            and a room as chaotic as his ideas, Paw thrives in the city’s neon-lit underbelly, where his 
            quick reflexes and sharper tongue make him a natural. But when he stumbles upon a strange occult 
            toy in a hidden shop, he unknowingly sets something far greater in motion. This time, his luck 
            might not be enough to get him out of what’s coming."
          />

          {/* Belle */}
          <CharacterCard
            name="Belle"
            species="Horse (Female)"
            height="6'1"
            imgSrc="/characters/belle.png"
            bio="Belle was born into wealth, elegance, and a life of comfort. She always had someone to drive her, 
            cook for her, and clean up after her. But now, determined to make it on her own, she’s learning 
            firsthand that independence is nothing like she imagined. She can’t drive, has never touched a 
            washing machine, and the city is far more unpredictable than the sheltered world she left behind. 
            She’s naive, a little prude-ish, and maybe even spoiled—but there’s a fire beneath her polished 
            exterior. With Paw as her unexpected guide, she’s about to get a crash course in survival. What 
            she doesn’t realize yet is that the world she’s trying to navigate is about to change in ways she 
            could never have predicted."
          />

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
