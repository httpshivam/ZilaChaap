import React from 'react';
import { MessageCircle } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center group">
      <a
        href="#community"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-3 rounded-full border-2 border-[#181512] shadow-pop transition-transform hover:scale-105 active:scale-95 text-decoration-none"
        title="Join VIP WhatsApp Community"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="font-bebas text-base tracking-wider hidden sm:inline">
          JOIN VIP COMMUNITY
        </span>
      </a>
    </div>
  );
}
