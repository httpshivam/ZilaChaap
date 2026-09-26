import React, { useState } from 'react';
import { Phone, Download, MessageCircle, Menu, X, Flame } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export function Navbar({ onOpenPdf }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6EF]/95 backdrop-blur-md border-b-2 border-[#181512]">
      {/* Main navigation */}
      <div className="container-max py-3 px-4 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 text-decoration-none group shrink-0">
          <img
            src="/logo.png"
            alt="Zila Chaap Logo"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#181512] shadow-sm group-hover:rotate-6 transition-transform"
          />
          <div>
            <div className="font-display text-2xl md:text-3xl text-[#E61E54] tracking-tight leading-none group-hover:text-[#FF5400] transition-colors">
              ZILA CHAAP
            </div>
            <div className="text-xs font-semibold text-stone-700 font-hindi tracking-wider">
              {restaurantInfo.tagline}
            </div>
          </div>
        </a>

        {/* ANIMATED PHONE BADGE IN THE CENTER (Desktop & Tablet) */}
        <div className="hidden md:flex items-center justify-center">
          <a
            href={`tel:${restaurantInfo.phones[0].replace(/\s+/g, '')}`}
            className="phone-badge-pulse flex items-center gap-2.5 px-4 py-1.5 rounded-full border-2 border-[#FF5400] bg-white hover:bg-[#FFF2E6] text-[#181512] transition-all hover:scale-105 shadow-sm"
            title="Call Stall Direct"
          >
            <div className="w-7 h-7 rounded-full bg-[#FF5400] flex items-center justify-center text-white shrink-0">
              <Phone className="w-3.5 h-3.5 animate-phone-ring text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase font-bebas tracking-wider text-stone-500 leading-none">
                CALL STALL DIRECT
              </span>
              <span className="font-bold text-sm text-[#181512] font-mono leading-tight">
                {restaurantInfo.phones[0]} <span className="text-stone-400 font-normal">/</span> {restaurantInfo.phones[1]}
              </span>
            </div>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Download PDF Menu Button */}
          <button
            onClick={onOpenPdf}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border-2 border-[#181512] bg-white hover:bg-[#F3ECE0] font-bebas text-sm text-[#181512] shadow-sm transition-all hover:-translate-y-0.5"
            title="Download Full Menu PDF"
          >
            <Download className="w-4 h-4 text-[#E61E54]" />
            <span>MENU PDF</span>
          </button>

          {/* Join WhatsApp Community Button */}
          <a
            href="#community"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border-2 border-[#181512] bg-[#25D366] hover:bg-[#20BA5A] text-white font-bebas text-sm shadow-sm transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-white text-white" />
            <span className="hidden xs:inline">VIP COMMUNITY</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md border-2 border-[#181512] bg-white text-[#181512]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ANIMATED PHONE NUMBER BAR FOR MOBILE VIEW (Visible on mobile only, hidden on tablet and laptop) */}
      <div className="mobile-phone-bar md:hidden bg-gradient-to-r from-[#FFF5EE] via-[#FFEADB] to-[#FFF5EE] border-t border-[#181512]/15 px-3 py-1.5 items-center justify-center">
        <a
          href={`tel:${restaurantInfo.phones[0].replace(/\s+/g, '')}`}
          className="phone-badge-pulse flex items-center justify-center gap-2 py-1 px-3 rounded-full border-2 border-[#FF5400] bg-white text-[#181512] shadow-sm max-w-full"
          title="Direct Call Stall"
        >
          <div className="w-5 h-5 rounded-full bg-[#FF5400] flex items-center justify-center text-white shrink-0">
            <Phone className="w-3 h-3 animate-phone-ring text-white" />
          </div>
          <span className="font-bebas text-xs tracking-wider text-stone-600 uppercase">
            CALL:
          </span>
          <span className="font-bold font-mono text-sm text-[#181512]">
            {restaurantInfo.phones[0]}
          </span>
          <span className="bg-[#E61E54] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full animate-pulse ml-0.5">
            LIVE
          </span>
        </a>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6EF] border-t-2 border-[#181512] px-6 py-4 space-y-3 font-bebas text-xl">
          {/* Mobile Phone Call Button */}
          <a
            href={`tel:${restaurantInfo.phones[0].replace(/\s+/g, '')}`}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#FFF2E6] border-2 border-[#FF5400] text-[#181512] rounded-md text-base font-bold font-mono"
          >
            <Phone className="w-4 h-4 text-[#FF5400] animate-phone-ring" />
            <span>CALL: {restaurantInfo.phones[0]}</span>
          </a>

          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#181512] hover:text-[#E61E54] py-1"
          >
            RATE CARD / मेन्यू व रेट
          </a>
          <a
            href="#offers"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#181512] hover:text-[#E61E54] py-1"
          >
            OFFERS & DEALS / ऑफर्स
          </a>
          <a
            href="#categories"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#181512] hover:text-[#E61E54] py-1"
          >
            CATEGORIES
          </a>
          <a
            href="#community"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#059669] hover:underline py-1 flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block animate-pulse"></span>
            VIP WHATSAPP COMMUNITY
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#181512] hover:text-[#E61E54] py-1"
          >
            CUSTOMER REVIEWS / रिव्यू
          </a>

          <div className="pt-3 border-t border-stone-300 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPdf();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-white border-2 border-[#181512] rounded-md font-bebas text-base text-[#181512]"
            >
              <Download className="w-4 h-4 text-[#E61E54]" />
              DOWNLOAD MENU PDF
            </button>
            <a
              href="#community"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#25D366] text-white border-2 border-[#181512] rounded-md font-bebas text-base"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              JOIN VIP COMMUNITY
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
