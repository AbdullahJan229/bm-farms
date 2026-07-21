import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Factory, MapPin, Zap, CheckCircle2 } from 'lucide-react';

const facilities = [
  {
    title: "Star Floating Feed Mill",
    location: "Multan, Punjab, Pakistan",
    category: "Aquaculture Feed Manufacturing",
    features: [
      "Modern Extruder & Pulverizer Technology",
      "Dedicated Floating & Sinking Feed Lines",
      "Advanced Nutrition Testing Lab",
      "High-Capacity Packaging & Storage Units"
    ]
  },
  {
    title: "Unique Super Feed Mill (US Feeds)",
    location: "Multan, Punjab, Pakistan",
    category: "Poultry & Livestock Feed Plant",
    features: [
      "15 Metric Tons / Hour Production Capacity",
      "Automated Dosing & Micro-Ingredient Blending",
      "Computerized Pellet Mills",
      "120,000 Bags Monthly Output"
    ]
  },
  {
    title: "Polypropylene Packaging Factory",
    location: "Multan, Punjab, Pakistan",
    category: "Star Polypropylene Pvt Ltd",
    features: [
      "High-Speed Circular Looms for Weaving",
      "Automated Extrusion Tape Lines",
      "3,600 Tons Annual Processing Capacity",
      "UV Stabilized & Moisture Control Testing"
    ]
  },
  {
    title: "Environment-Controlled Poultry Farms",
    location: "Multan Region, Pakistan",
    category: "BM Commercial Farming",
    features: [
      "18 Climate-Controlled Broiler Sheds",
      "Automated Feeders & Nipple Drinking Systems",
      "500,000 Broiler Batch Capacity",
      "Integrated Biosecurity & Disease Protocols"
    ]
  },
  {
    title: "50 MW Solar Power Generation Plant",
    location: "Multan Industrial Zone, Pakistan",
    category: "Star Enterprises - Clean Energy",
    features: [
      "High-Efficiency PV Solar Panels",
      "Central Inverters & Smart Grid Integration",
      "Powering Industrial & Agricultural Units",
      "25% Carbon Footprint Reduction"
    ]
  }
];

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Page Header */}
        <section className="bg-green-900 text-white py-16 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">Factories & Infrastructure</h1>
            <p className="mt-4 text-green-100 max-w-2xl mx-auto text-sm sm:text-base">
              State-of-the-art production facilities powering high-quality agricultural & industrial manufacturing.
            </p>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-green-50 rounded-xl text-green-700">
                      <Factory size={24} />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-green-100 text-green-800 rounded-full">
                      Active Unit
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">{facility.title}</h3>
                  
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-2 mb-4">
                    <MapPin size={14} className="text-green-700 shrink-0" />
                    <span>{facility.location}</span>
                  </div>

                  <p className="text-xs font-semibold text-green-700 mb-6 pb-3 border-b border-gray-100">
                    {facility.category}
                  </p>

                  <ul className="space-y-2.5">
                    {facility.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 size={14} className="text-green-700 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}