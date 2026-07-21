import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Fish, Bird, Layers, Factory, Package, Sun, ShieldCheck } from 'lucide-react';

export default function DivisionsPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Page Header */}
        <section className="bg-green-900 text-white py-16 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">Core Business Divisions</h1>
            <p className="mt-4 text-green-100 max-w-2xl mx-auto text-sm sm:text-base">
              Comprehensive agribusiness and industrial operations powering Pakistan's growth.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
          
          {/* 1. Commercial Farming Division */}
          <div id="farming" className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-6">
              <div className="p-3 bg-green-50 rounded-xl text-green-700">
                <Fish size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">1. Commercial Farming Division</h2>
                <p className="text-xs text-green-700 font-semibold">BM Farms & Services Pvt Ltd</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Fish Farming */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2 text-green-800 font-bold mb-3">
                  <Fish size={20} />
                  <h3>Fish Farming</h3>
                </div>
                <ul className="text-xs text-gray-600 space-y-2">
                  <li>• <strong>12 Acres / 1,000 Acres Overall:</strong> High-efficiency pond systems</li>
                  <li>• <strong>Species:</strong> Rohu, Tilapia, Thaila and freshwater species</li>
                  <li>• <strong>Protocols:</strong> Sustainable water & feeding protocols</li>
                  <li>• <strong>Capacity:</strong> 2,500+ tons annual supply</li>
                </ul>
              </div>

              {/* Broiler Farming */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2 text-green-800 font-bold mb-3">
                  <Bird size={20} />
                  <h3>Broiler Farming</h3>
                </div>
                <ul className="text-xs text-gray-600 space-y-2">
                  <li>• <strong>Houses:</strong> 18 modern environment-controlled poultry houses</li>
                  <li>• <strong>Capacity:</strong> Total capacity of 500,000 birds</li>
                  <li>• <strong>Automation:</strong> Automated temperature, ventilation & feeding</li>
                  <li>• <strong>Performance:</strong> Efficient FCR & high production turnover</li>
                </ul>
              </div>

              {/* Layer Farming */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2 text-green-800 font-bold mb-3">
                  <Layers size={20} />
                  <h3>Layer Farming</h3>
                </div>
                <ul className="text-xs text-gray-600 space-y-2">
                  <li>• <strong>Capacity:</strong> 200,000 birds for commercial egg production</li>
                  <li>• <strong>Systems:</strong> Automated egg collection systems</li>
                  <li>• <strong>Supply Chain:</strong> Strong supply chain capabilities</li>
                  <li>• <strong>Output:</strong> Consistent and reliable production</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Feed Production Division */}
          <div id="feed" className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-6">
              <div className="p-3 bg-green-50 rounded-xl text-green-700">
                <Factory size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">2. Feed Production Division</h2>
                <p className="text-xs text-green-700 font-semibold">Star Floating Feed Pvt Ltd + Unique Super Feed Pvt Ltd</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              {/* Star Floating Feed */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-lg font-bold text-green-900 mb-2">A. Star Floating Feed Pvt Ltd</h3>
                <p className="text-xs text-gray-500 mb-4">Multan Plant - Specialized Aquaculture Feed</p>
                <div className="space-y-2 text-xs text-gray-600">
                  <p><strong>Specializations:</strong> Floating Fish Feed, Sinking Fish Feed, Shrimp Feed, Special aquaculture formulas.</p>
                  <p><strong>Key Features:</strong> Modern extrusion & pulverizer technology, nutritionally optimized formulas, nationwide distribution, 12+ years experience.</p>
                </div>
              </div>

              {/* Unique Super Feed */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-lg font-bold text-green-900 mb-2">B. Unique Super Feed Pvt Ltd (US Feeds)</h3>
                <p className="text-xs text-gray-500 mb-4">Multan Plant - Poultry & Animal Feed</p>
                <div className="space-y-2 text-xs text-gray-600">
                  <p><strong>Specializations:</strong> Broiler feed, Layer feed, Breeder feed, Livestock feed.</p>
                  <p><strong>Production Capacity:</strong> 15 MT per hour / 120,000 bags per month.</p>
                  <p><strong>Strengths:</strong> Automated blending & mixing systems, strong presence in Punjab.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Polypropylene Bags Division */}
          <div id="packaging" className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-6">
              <div className="p-3 bg-green-50 rounded-xl text-green-700">
                <Package size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">3. Polypropylene Bags Division</h2>
                <p className="text-xs text-green-700 font-semibold">Star Polypropylene Pvt Ltd - Multan, Pakistan</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-600">
              <div className="space-y-2">
                <p>• <strong>Annual Capacity:</strong> 3,600 tons</p>
                <p>• <strong>Lines:</strong> Automated extrusion, weaving & stitching lines</p>
                <p>• <strong>Quality:</strong> Durable, tear-resistant PP bags</p>
              </div>
              <div className="space-y-2">
                <p>• <strong>Protection:</strong> UV-protected & moisture-resistant</p>
                <p>• <strong>Options:</strong> Custom print and sizing options</p>
                <p>• <strong>Sustainability:</strong> Recyclable & eco-friendly</p>
              </div>
            </div>
          </div>

          {/* 4. Energy Division */}
          <div id="energy" className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-6">
              <div className="p-3 bg-green-50 rounded-xl text-green-700">
                <Sun size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">4. Energy Division</h2>
                <p className="text-xs text-green-700 font-semibold">Star Enterprises - 50 MW Solar Power Project</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-600">
              <div className="space-y-2">
                <p>• <strong>Plant Capacity:</strong> 50 MW Solar Power Plant</p>
                <p>• <strong>Technology:</strong> Photovoltaic (PV) panel technology</p>
              </div>
              <div className="space-y-2">
                <p>• <strong>Impact:</strong> 25% carbon emission reduction</p>
                <p>• <strong>Goal:</strong> Renewable, cost-efficient, stable electricity for operations and communities</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}