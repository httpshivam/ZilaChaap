import React from 'react';

export function MarqueeTicker({ items, bg = "bg-[#FF5400]", textColor = "text-white", reverse = false }) {
  const content = items || [
    "★ EK BAAR KHAOGE, BAAR-BAAR AAOGE!",
    "🔥 SPECIAL TANDOORI SOYA CHAAP",
    "🥟 STEAMING HOT HIMALAYAN MOMOS",
    "⚡ KURKURE CRUNCHY MOMOS",
    "🛵 AVAILABLE ON SWIGGY & ZOMATO",
    "🎁 JOIN WHATSAPP COMMUNITY FOR 20% OFF",
    "🌶️ 100% PURE VEGETARIAN RECIPES",
    "📞 DIRECT CALL: +91 97589 18395"
  ];

  return (
    <div className={`overflow-hidden select-none flex ${bg} ${textColor} border-y-2 border-[#181512] py-2 font-bebas text-lg md:text-xl tracking-widest`}>
      <div className={`flex shrink-0 min-w-full gap-8 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {content.map((text, idx) => (
          <span key={idx} className="flex items-center gap-4 whitespace-nowrap">
            <span>{text}</span>
          </span>
        ))}
      </div>
      <div className={`flex shrink-0 min-w-full gap-8 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`} aria-hidden="true">
        {content.map((text, idx) => (
          <span key={`clone-${idx}`} className="flex items-center gap-4 whitespace-nowrap">
            <span>{text}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
