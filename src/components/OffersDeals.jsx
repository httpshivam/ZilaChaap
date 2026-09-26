import React, { useState } from 'react';
import { Tag, Copy, Check, MessageCircle, Gift, Sparkles } from 'lucide-react';
import { offersData, restaurantInfo } from '../data/restaurantData';

export function OffersDeals() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="offers" className="py-12 bg-[#FAF6EF]">
      <div className="container-max">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#E61E54] font-bebas text-lg tracking-widest uppercase">
              <Sparkles className="w-4 h-4 fill-[#E61E54]" />
              <span>SPECIAL DISCOUNTS & PROMOS</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-[#181512] leading-tight">
              HOT OFFERS & DEALS / <span className="text-[#FF5400]">ऑफर्स</span>
            </h2>
          </div>
          <p className="text-stone-600 text-sm md:text-base max-w-md">
            Use these promo codes on WhatsApp order or mention when ordering at the counter to claim exclusive discounts!
          </p>
        </div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {offersData.map((offer) => {
            const isCopied = copiedId === offer.id;
            return (
              <div
                key={offer.id}
                className="pop-card p-5 flex flex-col justify-between relative overflow-hidden bg-white group hover:border-[#E61E54]"
              >
                {/* Decorative slant badge */}
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[11px] font-bebas px-2.5 py-1 rounded bg-[#FAF6EF] border border-[#181512] text-[#181512] tracking-wider">
                    {offer.badge}
                  </span>
                  <Gift className="w-5 h-5 text-[#FF5400] group-hover:rotate-12 transition-transform" />
                </div>

                {/* Offer amount */}
                <div className="my-2">
                  <div className="font-display text-3xl md:text-4xl text-[#E61E54] tracking-tight leading-none mb-1">
                    {offer.discount}
                  </div>
                  <h3 className="font-bold text-stone-900 text-base mb-1">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {offer.desc}
                  </p>
                </div>

                {/* Promo Code Box */}
                <div className="mt-4 pt-3 border-t-2 border-dashed border-stone-200">
                  <div className="flex items-center justify-between bg-[#FAF6EF] border border-stone-300 rounded px-2.5 py-1.5 mb-2">
                    <span className="font-mono font-bold text-sm text-[#181512] tracking-wider">
                      {offer.code}
                    </span>
                    <button
                      onClick={() => handleCopy(offer.id, offer.code)}
                      className="text-xs font-bebas flex items-center gap-1 text-[#E61E54] hover:text-[#C91444] transition-colors"
                      title="Copy code"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-600" />
                          <span className="text-green-600 font-sans text-[11px] font-bold">COPIED!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>COPY</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="w-full flex items-center justify-center gap-1.5 py-1.5 bg-[#181512] text-white text-xs font-bebas rounded tracking-wider">
                    <span>SHOW CODE AT RESTAURANT COUNTER</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
