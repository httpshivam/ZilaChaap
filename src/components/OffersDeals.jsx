import React, { useState, useEffect } from 'react';
import { Tag, Copy, Check, Gift, Sparkles, Clock, Lock, ShieldCheck, Flame } from 'lucide-react';
import { offersData, restaurantInfo } from '../data/restaurantData';
import { OfferClaimModal } from './OfferClaimModal';

export function OffersDeals() {
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [activeCoupon, setActiveCoupon] = useState(null);
  const [activeTimeLeft, setActiveTimeLeft] = useState(0);

  // Check active coupon from localStorage on mount and interval
  useEffect(() => {
    const checkActiveCoupon = () => {
      try {
        const stored = localStorage.getItem('zila_active_coupon');
        if (stored) {
          const coupon = JSON.parse(stored);
          const remaining = Math.max(0, Math.floor((coupon.expiresAt - Date.now()) / 1000));
          if (remaining > 0) {
            setActiveCoupon(coupon);
            setActiveTimeLeft(remaining);
          } else {
            setActiveCoupon(null);
            setActiveTimeLeft(0);
          }
        } else {
          setActiveCoupon(null);
          setActiveTimeLeft(0);
        }
      } catch {
        setActiveCoupon(null);
      }
    };

    checkActiveCoupon();
    const interval = setInterval(checkActiveCoupon, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOpenClaimModal = (offer = null) => {
    setSelectedOffer(offer);
    setIsClaimModalOpen(true);
  };

  const formatSeconds = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="offers" className="py-12 bg-[#FAF6EF]">
      <div className="container-max">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#E61E54] font-bebas text-lg tracking-widest uppercase">
              <Sparkles className="w-4 h-4 fill-[#E61E54]" />
              <span>SPECIAL DISCOUNTS & COUNTER PROMOS</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-[#181512] leading-tight">
              HOT OFFERS & DEALS / <span className="text-[#FF5400]">काउंटर ऑफर्स</span>
            </h2>
          </div>
          <p className="text-stone-600 text-sm md:text-base max-w-md">
            Apni details verify karke exclusive <strong>5-character secret code</strong> generate karein aur food court counter par instant <strong>10% OFF</strong> payen!
          </p>
        </div>

        {/* PROMINENT TOP FEATURE BANNER: 10% OFF COUNTER PASS */}
        <div className="mb-8 p-5 sm:p-6 rounded-2xl border-3 border-[#181512] bg-gradient-to-r from-[#FFF5ED] via-[#FFEBF0] to-[#FAF6EF] shadow-pop flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#E61E54] text-white flex items-center justify-center shrink-0 border-2 border-[#181512] shadow-sm">
              <Flame className="w-6 h-6 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-[#E61E54] text-white font-bebas text-xs px-2.5 py-0.5 rounded tracking-wider">
                  LIVE COUNTER DISCOUNT
                </span>
                <span className="text-xs text-stone-600 font-bold">
                  {restaurantInfo.location} Stall
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-[#181512] mt-1 leading-tight">
                CLAIM FLAT 10% OFF AT FOOD COUNTER
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xl mt-0.5">
                Naam, Phone aur Email enter karke <strong>5-character code</strong> generate karein. Food court counter par dikhayein aur bill par 10% chhoot payen! <span className="text-[#E61E54] font-bold">(Code 10 min tak valid • 1 order per customer per day limit)</span>
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <button
              onClick={() => handleOpenClaimModal(null)}
              className="btn-primary w-full md:w-auto py-3 px-6 text-base flex items-center justify-center gap-2 shadow-pop hover:scale-105 transition-transform"
            >
              <Gift className="w-5 h-5 fill-white" />
              <span>
                {activeCoupon && activeTimeLeft > 0
                  ? `VIEW ACTIVE PASS (${activeCoupon.code}) • ${formatSeconds(activeTimeLeft)}`
                  : 'GENERATE 10% OFF CODE'}
              </span>
            </button>
          </div>
        </div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {offersData.map((offer) => {
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

                {/* Coupon Claim Trigger Box */}
                <div className="mt-4 pt-3 border-t-2 border-dashed border-stone-200 space-y-2">
                  {activeCoupon && activeTimeLeft > 0 ? (
                    <button
                      onClick={() => handleOpenClaimModal(offer)}
                      className="w-full py-2 px-2.5 rounded-lg border-2 border-green-600 bg-green-50 text-green-900 font-mono text-xs font-bold flex items-center justify-between hover:bg-green-100 transition-colors shadow-sm"
                    >
                      <span className="font-bebas text-sm tracking-wider flex items-center gap-1 text-green-800">
                        <Clock className="w-3.5 h-3.5 text-green-600" />
                        <span>CODE: {activeCoupon.code}</span>
                      </span>
                      <span className="text-[11px] bg-green-200 px-1.5 py-0.5 rounded text-green-900">
                        {formatSeconds(activeTimeLeft)}
                      </span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleOpenClaimModal(offer)}
                      className="w-full py-2.5 px-3 rounded-lg border-2 border-[#181512] bg-[#181512] hover:bg-[#E61E54] text-white font-bebas text-sm flex items-center justify-center gap-1.5 transition-all shadow-sm hover:-translate-y-0.5"
                    >
                      <Lock className="w-3.5 h-3.5 text-[#FF5400]" />
                      <span>UNLOCK 10% COUNTER CODE</span>
                    </button>
                  )}

                  <div className="w-full flex items-center justify-center gap-1 text-[10px] text-stone-500 font-medium">
                    <ShieldCheck className="w-3 h-3 text-green-600" />
                    <span>Valid 10 min • 1 order/day limit</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Claim Modal Popup */}
      <OfferClaimModal
        isOpen={isClaimModalOpen}
        onClose={() => setIsClaimModalOpen(false)}
        initialOffer={selectedOffer}
      />
    </section>
  );
}
