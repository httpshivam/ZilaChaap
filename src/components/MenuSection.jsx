import React from 'react';
import { Download, Flame, FileText, CheckCircle2, Sparkles, Phone, Award } from 'lucide-react';
import { chaapItems, momosItems, rotiItems, restaurantInfo } from '../data/restaurantData';

export function MenuSection({ onOpenPdf }) {
  return (
    <section id="menu" className="py-16 bg-[#FAF6EF] border-t-2 border-[#181512]">
      <div className="container-max">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#FF5400] font-bebas text-lg tracking-widest uppercase">
              <Flame className="w-4 h-4 fill-[#FF5400]" />
              <span>ROADSIDE FOOD COURT LIVE TANDOOR & STEAM STATION</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-[#181512] leading-tight">
              RATE CARD / <span className="text-[#E61E54] font-hindi">मेन्यू व रेट लिस्ट</span>
            </h2>
            <p className="text-stone-600 text-sm md:text-base mt-1">
              Freshly prepared at our live roadside stall counter. Charcoal roasted Soya Chaap & piping hot Momos!
            </p>
          </div>

          {/* PDF Download Button */}
          <div className="flex items-center gap-3">
            <a
              href="/menu.pdf"
              download="Zila_Chaap_Menu.pdf"
              className="btn-primary py-2.5 px-5 text-base flex items-center gap-2"
              title="Download original high-res menu PDF"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD MENU PDF</span>
            </a>
            <button
              onClick={onOpenPdf}
              className="btn-secondary py-2.5 px-4 text-base flex items-center gap-1.5"
              title="Preview menu on screen"
            >
              <FileText className="w-4 h-4 text-[#FF5400]" />
              <span>PREVIEW</span>
            </button>
          </div>
        </div>

        {/* CLEAN, ELEGANT TWO-COLUMN RATE BOARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Column 1: Soya Chaap Table (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl border-2 border-[#181512] shadow-pop overflow-hidden">
            {/* Table Header */}
            <div className="bg-[#181512] text-white px-5 py-3.5 flex items-center justify-between border-b-2 border-[#181512]">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#FF5400] fill-[#FF5400]" />
                <h3 className="font-display text-2xl tracking-wider text-white">
                  TANDOORI SOYA CHAAP (11 DISHES)
                </h3>
              </div>
              <div className="flex gap-2 sm:gap-4 font-bebas text-xs sm:text-base tracking-wider text-stone-300 font-bold shrink-0">
                <span className="w-12 sm:w-14 text-center">HALF</span>
                <span className="w-12 sm:w-14 text-center">FULL</span>
              </div>
            </div>

            {/* Chaap List */}
            <div className="p-2 sm:p-3 divide-y divide-stone-200">
              {chaapItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-2 sm:py-2.5 px-2 sm:px-3 rounded hover:bg-[#FFF9F5] transition-colors"
                >
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 pr-2">
                    <span className="text-xs font-mono font-bold text-stone-400 w-4 sm:w-5 shrink-0">
                      {idx + 1}.
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-bold text-stone-900 text-sm md:text-base">
                          {item.name}
                        </span>
                        {item.isBestseller && (
                          <span className="text-[9px] sm:text-[10px] font-bold bg-[#FFEBF0] text-[#E61E54] border border-[#E61E54]/40 px-1.5 py-0.2 rounded font-sans uppercase shrink-0">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-hindi text-[#FF5400] truncate">
                        {item.hindiName}
                      </div>
                    </div>
                  </div>

                  {/* Rates */}
                  <div className="flex gap-2 sm:gap-4 font-mono font-bold text-xs sm:text-base shrink-0">
                    <span className="w-12 sm:w-14 text-center py-1 px-1 sm:px-2 rounded bg-stone-100 text-stone-900 border border-stone-200">
                      ₹{item.halfPrice}
                    </span>
                    <span className="w-12 sm:w-14 text-center py-1 px-1 sm:px-2 rounded bg-[#FFEBF0] text-[#E61E54] border border-[#E61E54]/30 font-black">
                      ₹{item.fullPrice}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Steaming Momos & Breads (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Momos Box */}
            <div className="bg-white rounded-xl border-2 border-[#181512] shadow-pop overflow-hidden">
              <div className="bg-[#181512] text-white px-5 py-3.5 flex items-center justify-between border-b-2 border-[#181512]">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🥟</span>
                  <h3 className="font-display text-2xl tracking-wider text-white">
                    STEAMING MOMOS
                  </h3>
                </div>
                <div className="flex gap-2 sm:gap-4 font-bebas text-xs sm:text-base tracking-wider text-stone-300 font-bold shrink-0">
                  <span className="w-12 sm:w-14 text-center">HALF</span>
                  <span className="w-12 sm:w-14 text-center">FULL</span>
                </div>
              </div>

              <div className="p-2 sm:p-3 divide-y divide-stone-200">
                {momosItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between py-2.5 sm:py-3 px-2 sm:px-3 rounded hover:bg-[#FFF9F5] transition-colors"
                  >
                    <div className="min-w-0 pr-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-bold text-stone-900 text-sm sm:text-base">
                          {item.name}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-bold bg-[#EAFBF0] text-green-700 border border-green-500/40 px-1.5 py-0.2 rounded font-sans uppercase shrink-0">
                          Fresh
                        </span>
                      </div>
                      <div className="text-xs font-hindi text-[#FF5400] truncate">
                        {item.hindiName}
                      </div>
                    </div>

                    <div className="flex gap-2 sm:gap-4 font-mono font-bold text-xs sm:text-base shrink-0">
                      <span className="w-12 sm:w-14 text-center py-1 px-1 sm:px-2 rounded bg-stone-100 text-stone-900 border border-stone-200">
                        ₹{item.halfPrice}
                      </span>
                      <span className="w-12 sm:w-14 text-center py-1 px-1 sm:px-2 rounded bg-[#FFEBF0] text-[#E61E54] border border-[#E61E54]/30 font-black">
                        ₹{item.fullPrice}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fresh Tandoor & Tawa Breads */}
            <div className="bg-white rounded-xl border-2 border-[#181512] shadow-pop p-5">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-200">
                <span className="font-display text-xl text-stone-900 tracking-wider">
                  TAWA & TANDOOR BREADS
                </span>
                <span className="text-xs font-hindi text-[#FF5400]">ताज़ा रोटियां</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-[#FAF6EF] rounded-lg border border-stone-300 text-center">
                  <div className="font-bold text-stone-900 text-sm">Rumali Roti</div>
                  <div className="text-xs font-hindi text-stone-600 mb-1">रुमाली रोटी</div>
                  <div className="font-display text-2xl text-[#E61E54]">₹10 / pc</div>
                </div>

                <div className="p-3 bg-[#FAF6EF] rounded-lg border border-stone-300 text-center">
                  <div className="font-bold text-stone-900 text-sm">Tandoori Roti</div>
                  <div className="text-xs font-hindi text-stone-600 mb-1">तंदूरी रोटी</div>
                  <div className="font-display text-2xl text-[#FF5400]">₹14 / pc</div>
                </div>
              </div>
            </div>

            {/* Food Court Highlights Card */}
            <div className="bg-[#FFF2E6] rounded-xl border-2 border-[#FF5400] p-4 text-xs text-stone-800 space-y-2">
              <div className="font-bebas text-base text-[#FF5400] tracking-wider uppercase">
                STALL SERVICE DETAILS
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF5400] shrink-0" />
                <span>Standing Food Court & Live Counter Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF5400] shrink-0" />
                <span>Car-Side Pickup & Foil Box Takeaway Packing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF5400] shrink-0" />
                <span>100% Pure Vegetarian • Fresh Daily Soya & Paneer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Showcase with Street Food Photos */}
        <div>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-[#FF5400] font-bebas text-sm tracking-widest uppercase mb-1">
              <Sparkles className="w-4 h-4 fill-[#FF5400]" />
              <span>AUTHENTIC STREET LIVE SPECIALS</span>
            </div>
            <h3 className="font-display text-3xl md:text-5xl text-[#181512]">
              GLIMPSE OF OUR LIVE STREET FOOD STALL
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Live Charcoal Tandoor Chaap",
                hindi: "तंदूरी मसाला चाप",
                rate: "Half ₹100 • Full ₹180",
                img: "/images/street_masala_chaap.jpg",
                tag: "Live Tandoor"
              },
              {
                title: "Creamy Malai Chaap",
                hindi: "मलाईदार चाप",
                rate: "Half ₹100 • Full ₹180",
                img: "/images/street_malai_chaap.jpg",
                tag: "Amul Butter"
              },
              {
                title: "Steamed Momos Live Steamer",
                hindi: "वेज व पनीर मोमोज़",
                rate: "Veg ₹40 • Paneer ₹50",
                img: "/images/street_steamed_momos.jpg",
                tag: "Piping Hot"
              },
              {
                title: "Hand-Tossed Rumali Roti",
                hindi: "रुमाली रोटी लाइव",
                rate: "₹10 / pc",
                img: "/images/street_rumali_roti.jpg",
                tag: "Live Tawa"
              }
            ].map((dish, idx) => (
              <div
                key={idx}
                className="pop-card overflow-hidden bg-white group hover:border-[#E61E54]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={dish.img}
                    alt={dish.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-[#E61E54] text-white text-[10px] font-bebas px-2 py-0.5 rounded shadow">
                    {dish.tag}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-bold text-stone-900 text-base">{dish.title}</h4>
                  <div className="text-xs text-[#FF5400] font-hindi mb-2">{dish.hindi}</div>
                  <div className="inline-block px-3 py-1 bg-[#FAF6EF] border border-stone-300 rounded font-bebas text-sm text-[#181512]">
                    {dish.rate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
