import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar for Contact Info */}
      <div className="bg-green-900 text-white text-xs py-2 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Phone size={14} /> +92 300 6333064
          </span>
          <span className="hidden md:flex items-center gap-1">
            <Mail size={14} /> starfloatingfeedofficial@gmail.com
          </span>
        </div>
        <div className="text-gray-200 hidden sm:block">
          Multan, Pakistan
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-bold text-green-800 tracking-wide">BM FARMS</span>
          <span className="text-[10px] text-gray-500 font-semibold tracking-wider">& SERVICES PVT LTD</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 font-medium text-gray-700 text-sm">
          <Link href="/" className="hover:text-green-700 transition">Home</Link>
          <Link href="/about" className="hover:text-green-700 transition">About Us</Link>
          <Link href="/divisions" className="hover:text-green-700 transition">Divisions</Link>
          <Link href="/facilities" className="hover:text-green-700 transition">Facilities</Link>
          <Link href="/contact" className="hover:text-green-700 transition">Contact Us</Link>
        </div>

        <div>
          <Link 
            href="/contact" 
            className="bg-green-700 hover:bg-green-800 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-md transition"
          >
            Get In Touch
          </Link>
        </div>
      </nav>
    </header>
  );
}