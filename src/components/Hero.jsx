import React from 'react';
import { Sparkles, Download, MessageCircle, ShieldCheck, Flame, Utensils, MapPin } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export function Hero({ onOpenPdf }) {
  return (
    <section className="relative pt-5 pb-10 md:pt-10 md:pb-16 overflow-x-clip bg-[#FAF6EF]">
      {/* Background subtle noise/warm ambient dots */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#181512_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container-max relative z-10">
        {/* Top Info Bar matching street food court */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 sm:gap-4 pb-4 border-b border-stone-300 text-stone-700 font-bebas text-lg md:text-xl">
          <div>
            <div className="text-[#FF5400] text-2xl md:text-3xl leading-none font-bold">10:00 - 23:00</div>
            <div className="tracking-wide text-xs sm:text-sm text-stone-600 font-sans mt-0.5 font-medium flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E61E54]" />
              <span>Roadside Food Court Stall • Fresh Live Charcoal Tandoor</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#FFEBF0] text-[#E61E54] border-2 border-[#E61E54] px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full font-hindi-slogan text-sm sm:text-base md:text-lg rot-badge shadow-sm">
            <Flame className="w-4 h-4 fill-[#E61E54] animate-pulse" />
            <span>{restaurantInfo.tagline}</span>
          </div>

          <div className="text-left sm:text-right hidden sm:block">
            <div className="text-[#181512] text-xl md:text-2xl font-bold tracking-wider">
              {restaurantInfo.phones[0]}
            </div>
            <div className="text-xs text-stone-500 font-sans">
              Stall line: {restaurantInfo.phones[1]}
            </div>
          </div>
        </div>

        {/* GIANT DISPLAY TITLE WITH LOGO INTEGRATED AS THE CIRCLE OF 'P' */}
        <div className="my-3 sm:my-6 md:my-10 text-center relative px-2">
          <div className="relative inline-block max-w-full">
            <h1 className="font-display hero-display-title text-[#FF5400] select-none hover:text-[#E61E54] transition-colors duration-300 inline-flex items-baseline justify-center">
              <span>ZILA CHAA</span>
              <span className="p-letter-container">
                <span className="text-[#FF5400]">P</span>
                {/* Rotating Logo Stamp that forms the circular loop of the letter P */}
                <span className="p-logo-badge" title="Zila Chaap Mascot">
                  <img
                    src="/logo.png"
                    alt="Zila Chaap Mascot"
                    className="w-full h-full rounded-full animate-spin-loop"
                  />
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle / Focus items */}
          <p className="max-w-2xl mx-auto mt-4 text-stone-700 text-sm sm:text-base md:text-xl font-hindi leading-relaxed px-2 sm:px-4">
            सड़क किनारे फूड कोर्ट पर लाइव तंदूर से गरमा-गरम <strong className="text-[#E61E54]">मलाई व तंदूरी सोया चाप</strong> (₹100 से) और रसीले <strong className="text-[#FF5400]">स्टीम्ड व फ्राइड मोमोज़</strong> (₹40 से)। असली स्वाद, ताज़ा मसाले!
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 w-full max-w-2xl mx-auto px-2">
          <a href="#menu" className="btn-primary w-full sm:w-auto text-center">
            <Utensils className="w-5 h-5" />
            <span>VIEW RATE CARD / रेट लिस्ट</span>
          </a>

          <a
            href="#community"
            className="btn-whatsapp w-full sm:w-auto text-center"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>JOIN WHATSAPP VIP COMMUNITY</span>
          </a>

          <button onClick={onOpenPdf} className="btn-secondary w-full sm:w-auto text-center">
            <Download className="w-5 h-5 text-[#E61E54]" />
            <span>DOWNLOAD MENU PDF</span>
          </button>
        </div>

        {/* Highlight Banner with Badges & Platforms */}
        <div className="pop-card p-4 md:p-6 bg-gradient-to-r from-[#FFFDF9] via-white to-[#FFF6F0] mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left: Roadside food court highlights */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs sm:text-sm font-semibold text-stone-700">
              <span className="flex items-center gap-1.5 bg-[#FFF2E6] text-[#FF5400] px-3 py-1.5 rounded-full border border-[#FF5400]/30">
                <Flame className="w-4 h-4 fill-[#FF5400]" /> Live Tandoor & Steamer Counter
              </span>
              <span className="flex items-center gap-1.5 bg-[#EAFBF0] text-[#10B981] px-3 py-1.5 rounded-full border border-[#10B981]/30">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" /> 100% Pure Veg Soya
              </span>
              <span className="flex items-center gap-1.5 bg-[#FDF2F8] text-[#E61E54] px-3 py-1.5 rounded-full border border-[#E61E54]/30">
                <Sparkles className="w-4 h-4 text-[#E61E54]" /> Quick Car & Takeaway Packing
              </span>
            </div>

            {/* Right: Swiggy / Zomato order pill */}
            <div className="flex items-center gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-stone-200 w-full md:w-auto justify-center">
              <span className="text-xs uppercase font-bebas tracking-wider text-stone-500">Also Available On:</span>
              <span className="px-3 py-1 bg-[#FC8019] text-white rounded font-bold text-xs shadow-sm">
                SWIGGY
              </span>
              <span className="px-3 py-1 bg-[#E23744] text-white rounded font-bold text-xs shadow-sm">
                ZOMATO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
