import Link from 'next/link';
import { ArrowRight, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-green-900 to-green-800 text-white py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-green-700/50 border border-green-500/30 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-6">
          <Award size={16} className="text-yellow-400" />
          <span>12+ Years of Excellence in Agribusiness & Industry</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight">
          Pioneering Sustainable Agribusiness & Industrial Solutions
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-green-100 max-w-3xl leading-relaxed">
          A diversified enterprise spanning Feed Manufacturing, Eco-Friendly Aquaculture, High-Capacity Poultry Farming, Industrial Packaging, and Clean Energy Production across Pakistan.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/divisions"
            className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3.5 rounded-lg transition shadow-lg"
          >
            Explore Divisions <ArrowRight size={18} />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-lg transition"
          >
            Company Overview
          </Link>
        </div>

      </div>
    </section>
  );
}