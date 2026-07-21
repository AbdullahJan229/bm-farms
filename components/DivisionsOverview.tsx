import Link from 'next/link';
import { Wheat, Fish, Package, Sun, ArrowRight } from 'lucide-react';

const divisions = [
  {
    icon: <Fish className="w-10 h-10 text-green-700" />,
    title: "Commercial Farming Division",
    subtitle: "Fish, Broiler & Layer Production",
    description: "Operates 18 modern environment-controlled poultry houses with 500,000 broiler capacity, 200,000 layers, and 1,000 acres of sustainable fish farming.",
    link: "/divisions#farming"
  },
  {
    icon: <Wheat className="w-10 h-10 text-green-700" />,
    title: "Feed Production Division",
    subtitle: "Star Floating Feed & US Feeds",
    description: "Two advanced feed plants producing 120,000 bags/month of high-nutrition floating fish feed, shrimp feed, broiler, layer, and livestock feeds.",
    link: "/divisions#feed"
  },
  {
    icon: <Package className="w-10 h-10 text-green-700" />,
    title: "Polypropylene Bags Division",
    subtitle: "Star Polypropylene Pvt Ltd",
    description: "3,600 tons annual capacity producing durable, UV-protected, eco-friendly industrial-grade woven PP bags for agricultural and industrial packaging.",
    link: "/divisions#packaging"
  },
  {
    icon: <Sun className="w-10 h-10 text-green-700" />,
    title: "Energy Division",
    subtitle: "Star Enterprises - Clean Energy",
    description: "50 MW solar power project providing cost-efficient clean power, reducing carbon emissions by 25% for sustainable industrial operations.",
    link: "/divisions#energy"
  }
];

export default function DivisionsOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Core Business Divisions
          </h2>
          <p className="mt-4 text-base text-gray-600">
            A fully integrated agribusiness model driving efficiency, consistent quality, and national development across Pakistan.
          </p>
        </div>

        {/* Divisions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {divisions.map((division, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition flex flex-col justify-between"
            >
              <div>
                <div className="p-4 bg-green-50 w-fit rounded-xl mb-6">
                  {division.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {division.title}
                </h3>
                <span className="inline-block mt-1 text-sm font-semibold text-green-700">
                  {division.subtitle}
                </span>
                <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                  {division.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link 
                  href={division.link}
                  className="inline-flex items-center gap-2 text-green-800 font-bold hover:text-green-600 transition text-sm"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}