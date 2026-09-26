import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { OffersDeals } from './components/OffersDeals';
import { CategoryShowcase } from './components/CategoryShowcase';
import { MenuSection } from './components/MenuSection';
import { WhatsAppSubscribe } from './components/WhatsAppSubscribe';
import { CustomerReviews } from './components/CustomerReviews';
import { AboutStory } from './components/AboutStory';
import { Footer } from './components/Footer';
import { PdfMenuModal } from './components/PdfMenuModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SteamSmokeOverlay } from './components/SteamSmokeOverlay';

export default function App() {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EF] relative">
      {/* Site-wide Live Tandoor & Steamer Steam / Smoke (भाप और धुआँ) */}
      <SteamSmokeOverlay />

      {/* Top Navbar */}
      <Navbar
        onOpenPdf={() => setIsPdfModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section matching screenshot aesthetic */}
        <Hero onOpenPdf={() => setIsPdfModalOpen(true)} />

        {/* Rolling Banner Marquee */}
        <MarqueeTicker
          bg="bg-[#FF5400]"
          textColor="text-white"
          items={[
            "★ EK BAAR KHAOGE, BAAR-BAAR AAOGE!",
            "🔥 SIZZLING TANDOORI SOYA CHAAP",
            "🥟 FRESH JUICY STEAMED MOMOS",
            "⚡ EXTRA CRISPY KURKURE MOMOS",
            "🛵 DELIVERING ON SWIGGY & ZOMATO",
            "🎁 JOIN VIP WHATSAPP CLUB FOR OFFERS",
            "🌶️ AUTHENTIC SPICES & HYGIENE PLEDGE"
          ]}
        />

        {/* Hot Offers & Deals Section */}
        <OffersDeals />

        {/* Categories Section (КАТЕГОРИИ in screenshot) */}
        <CategoryShowcase onSelectCategory={handleSelectCategory} />

        {/* Secondary Marquee Ribbon */}
        <MarqueeTicker
          bg="bg-[#E61E54]"
          textColor="text-white"
          reverse={true}
          items={[
            "⭐ BESTSELLER SOYA CHAAP SPECIALS",
            "🥟 HANDMADE TIBETAN STEAMED MOMOS",
            "🔥 AFGHANI MALAI CHAAP IN BUTTER CASHEW GRAVY",
            "🥡 TAKEAWAY & TABLE DINE-IN AVAILABLE",
            "📞 DIRECT ENQUIRY: +91 97589 18395"
          ]}
        />

        {/* Updated Menu with PDF Download (No Cart / No Online Order) */}
        <MenuSection
          onOpenPdf={() => setIsPdfModalOpen(true)}
          selectedCategoryFilter={selectedCategory}
        />

        {/* WhatsApp VIP Community & Subscription */}
        <WhatsAppSubscribe />

        {/* Customer Reviews with Photo Upload */}
        <CustomerReviews />

        {/* Brand Story & Official Banner */}
        <AboutStory />
      </main>

      {/* Footer */}
      <Footer onOpenPdf={() => setIsPdfModalOpen(true)} />

      {/* PDF Menu Rate Card Modal */}
      <PdfMenuModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />

      {/* Quick Floating WhatsApp Community button */}
      <FloatingWhatsApp />
    </div>
  );
}
