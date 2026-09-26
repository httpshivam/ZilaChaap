import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, Heart, ArrowUp, Download } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export function Footer({ onOpenPdf }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF' }}
      className="border-t-4 border-[#FF5400] pt-14 pb-8"
    >
      <div className="container-max">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Zila Chaap"
                className="w-14 h-14 rounded-full border-2 border-[#FF5400] bg-white p-0.5 shrink-0"
              />
              <div>
                <h3 className="font-display text-3xl text-white tracking-tight leading-none">
                  ZILA CHAAP
                </h3>
                <p className="font-hindi text-[#FF5400] text-sm font-semibold">
                  {restaurantInfo.tagline}
                </p>
              </div>
            </div>
            <p className="text-stone-300 text-xs leading-relaxed">
              Authentic Delhi-style live tandoor Soya Chaap, freshly steamed Momos & tawa hot Rumali Roti at our roadside food court stall.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenPdf}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-stone-900 border border-stone-700 text-xs font-bebas tracking-wider text-white hover:text-[#FF5400] hover:border-[#FF5400] transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-[#E61E54]" />
                <span>DOWNLOAD MENU PDF</span>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h4 className="font-bebas text-xl text-[#FF5400] tracking-wider mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-medium text-stone-200">
              <li>
                <a href="#menu" className="text-white hover:text-[#FF5400] transition-colors">
                  Official Rate Card & Prices
                </a>
              </li>
              <li>
                <a href="#offers" className="text-white hover:text-[#FF5400] transition-colors">
                  Food Court Deals & Discounts
                </a>
              </li>
              <li>
                <a href="#categories" className="text-white hover:text-[#FF5400] transition-colors">
                  Chaap & Momos Categories
                </a>
              </li>
              <li>
                <a href="#community" className="text-white hover:text-[#25D366] transition-colors flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse"></span>
                  Join VIP WhatsApp Club
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-white hover:text-[#FF5400] transition-colors">
                  Customer Photos & Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Phone & Stall Contact */}
          <div>
            <h4 className="font-bebas text-xl text-[#FF5400] tracking-wider mb-4">
              STALL DIRECT CALL
            </h4>
            <div className="space-y-3.5 text-xs text-white">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#FF5400] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${restaurantInfo.phones[0].replace(/\s+/g, '')}`}
                    className="block text-white hover:text-[#FF5400] font-mono text-sm font-bold transition-colors"
                  >
                    {restaurantInfo.phones[0]}
                  </a>
                  <a
                    href={`tel:${restaurantInfo.phones[1].replace(/\s+/g, '')}`}
                    className="block text-white hover:text-[#FF5400] font-mono text-sm font-bold mt-0.5 transition-colors"
                  >
                    {restaurantInfo.phones[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FF5400] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Opening Hours</p>
                  <p className="text-stone-300">{restaurantInfo.timing}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF5400] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Stall Location</p>
                  <p className="text-stone-300">{restaurantInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: WhatsApp & Online Presence */}
          <div>
            <h4 className="font-bebas text-xl text-[#25D366] tracking-wider mb-4 flex items-center gap-1.5">
              <MessageCircle className="w-5 h-5 fill-[#25D366] text-[#25D366]" />
              <span>WHATSAPP COMMUNITY</span>
            </h4>
            <p className="text-xs text-stone-300 mb-4 leading-relaxed">
              Connect directly with our stall team on WhatsApp to receive secret tasting passes and special discounts!
            </p>
            <a
              href={`https://wa.me/${restaurantInfo.whatsappNumber}?text=${encodeURIComponent(
                'Namaste Zila Chaap! I want to join your WhatsApp foodie community.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bebas text-sm rounded shadow transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white text-white" />
              <span>JOIN COMMUNITY</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p className="text-stone-400">
            © {new Date().getFullYear()} Zila Chaap. All rights reserved. Sizzling Roadside Food Court Stall.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-stone-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
