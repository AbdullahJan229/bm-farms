import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Page Header */}
        <section className="bg-green-900 text-white py-16 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">Contact Us</h1>
            <p className="mt-4 text-green-100 max-w-2xl mx-auto text-sm sm:text-base">
              Get in touch with our head office for business inquiries, distribution partnerships, or feedback.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Head Office Multan</h2>
                <p className="text-gray-600 text-sm mt-2">
                  Reach out directly to BM Farms & Services Pvt Ltd management team.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="p-3 bg-green-50 text-green-700 rounded-lg shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Office Address</h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Office No. 17, MPS Road, Near Northern Bypass, Multan, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="p-3 bg-green-50 text-green-700 rounded-lg shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Phone Numbers</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      Landline: 061-2071268 <br />
                      Mobile / WhatsApp: +92 300 6333064
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="p-3 bg-green-50 text-green-700 rounded-lg shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Email Address</h3>
                    <p className="text-xs text-gray-600 mt-1 break-all">
                      starfloatingfeedofficial@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="p-3 bg-green-50 text-green-700 rounded-lg shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Working Hours</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      Monday – Saturday: 9:00 AM – 6:00 PM (PKT) <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-green-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-green-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="text" 
                    placeholder="+92 300 0000000" 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-green-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Inquiry Subject" 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-green-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Your Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Type your message here..." 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-green-600 focus:outline-none"
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-lg text-xs transition flex items-center justify-center gap-2"
                >
                  <Send size={14} /> Send Message
                </button>
              </form>
            </div>

          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}