import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Target, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Page Header */}
        <section className="bg-green-900 text-white py-16 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">About BM Farms</h1>
            <p className="mt-4 text-green-100 max-w-2xl mx-auto text-sm sm:text-base">
              12+ years of leadership and excellence in Pakistan's agribusiness and industrial sectors.
            </p>
          </div>
        </section>

        {/* Overview & Integrated Synergy */}
        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Overview</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
                BM Farms & Services Pvt Ltd is a diversified agribusiness and industrial enterprise with over 12 years of excellence in Pakistan's feed manufacturing, aquaculture, poultry farming, industrial packaging, and renewable energy sectors.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
                The company operates through a fully integrated business model designed to maximize efficiency, ensure consistent quality, and deliver sustainable agricultural solutions.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-700 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Feed Production Divisions supply optimized feed to poultry and fish farms.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-700 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Commercial Farming provides fresh meat through high-quality broiler production.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-700 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Polypropylene Bag Division supplies industrial-grade packaging.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-700 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Energy Division provides cost-efficient clean power for operations.</span>
                </div>
              </div>
            </div>

            {/* Vision Box */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 text-green-800 font-bold text-xl">
                <Target className="w-6 h-6" />
                <h3>Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base italic">
                "To lead Pakistan's agricultural, feed, poultry, aquaculture, packaging, and energy sectors through innovation, sustainability, high-quality products, and a commitment to national development."
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 bg-white border-t border-gray-200 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Leadership</h2>
            
            <div className="max-w-md mx-auto bg-gray-50 border border-gray-200 p-8 rounded-2xl text-center shadow-sm">
              
              {/* Profile Image Container */}
              <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-2 border-green-700 shadow-md">
                <Image 
                  src="/ceo.png" 
                  alt="Mr. Malik Azhar Mushtaq" 
                  fill 
                  className="object-cover" 
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900">Mr. Malik Azhar Mushtaq</h3>
              <p className="text-green-700 font-semibold text-xs tracking-wide uppercase mt-1">
                CEO & Director - BM Farms & Services Pvt Ltd
              </p>
              <p className="mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                A leading figure in Pakistan's aquaculture, feed manufacturing, and modern integrated farming sectors with over 12 years of specialized industry experience.
              </p>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}