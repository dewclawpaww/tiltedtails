export default function NavBar() {
  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-center py-4 bg-opacity-20 backdrop-blur-md z-10">
      <ul className="flex space-x-8 text-lg font-bold text-white neon-text">
        <li><a href="/" className="hover:text-red-400 transition-all">Home</a></li>
        <li><a href="/episodes" className="hover:text-blue-400 transition-all">Episodes</a></li>
        <li><a href="/merch" className="hover:text-green-400 transition-all">Merch</a></li>
        <li><a href="/characters" className="hover:text-purple-400 transition-all">Characters</a></li>
        <li><a href="/about" className="hover:text-yellow-400 transition-all">About</a></li>
      </ul>
    </nav>
  );
}
