import Link from 'next/link';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Company Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-wider">BM FARMS</span>
              <span className="text-[11px] text-green-500 font-bold tracking-widest">& SERVICES PVT LTD</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Diversified agribusiness & industrial group with 12+ years of excellence in feed manufacturing, aquaculture, poultry farming, packaging, and renewable energy in Pakistan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-green-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-green-400 transition">About Us</Link></li>
              <li><Link href="/divisions" className="hover:text-green-400 transition">Business Divisions</Link></li>
              <li><Link href="/facilities" className="hover:text-green-400 transition">Factories & Facilities</Link></li>
              <li><Link href="/contact" className="hover:text-green-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Business Units */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Our Entities</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>Star Floating Feed Pvt Ltd</li>
              <li>Unique Super Feed Pvt Ltd</li>
              <li>Star Polypropylene Pvt Ltd</li>
              <li>Star Enterprises (Solar Power)</li>
              <li>BM Commercial Farming</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Head Office</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-green-500 shrink-0 mt-0.5" />
                <span>Office No. 17, MPS Road, Near Northern Bypass, Multan, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-green-500 shrink-0" />
                <span>061-2071268 | +92 300 6333064</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-green-500 shrink-0" />
                <span className="break-all">starfloatingfeedofficial@gmail.com</span>
              </li>
              <li className="pt-2">
                <a 
                  href="https://starfeedsgroup.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-green-400 hover:underline font-semibold"
                >
                  Visit Official Portal <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} BM Farms & Services Pvt Ltd. All rights reserved.</p>
          <p>Designed for Excellence in Agribusiness</p>
        </div>
      </div>
    </footer>
  );
}