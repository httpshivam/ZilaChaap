import React from 'react';
import { ArrowDown, Flame, Sparkles } from 'lucide-react';
import { categoriesData } from '../data/restaurantData';

export function CategoryShowcase({ onSelectCategory }) {
  return (
    <section id="categories" className="py-14 bg-[#FAF6EF]">
      <div className="container-max text-center">
        {/* Title matching КАТЕГОРИИ in screenshot */}
        <div className="inline-block mb-8">
          <h2 className="font-display text-5xl md:text-7xl text-[#FF5400] tracking-tight leading-none">
            CATEGORIES
          </h2>
          <div className="text-stone-600 font-hindi font-semibold text-lg mt-1">
            स्वादिष्ट श्रेणियाँ
          </div>
          <div className="flex justify-center mt-2">
            <ArrowDown className="w-6 h-6 text-[#FF5400] animate-bounce" />
          </div>
        </div>

        {/* 4 Cards Grid mirroring screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesData.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group cursor-pointer flex flex-col items-center"
            >
              {/* Image Frame */}
              <div className="w-full aspect-[3/4] rounded-md overflow-hidden border-2 border-[#181512] shadow-pop group-hover:-translate-y-2 transition-all duration-300 relative bg-stone-200">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-3 left-3 bg-[#181512]/90 backdrop-blur-sm text-white text-[11px] font-bebas px-2.5 py-0.5 rounded border border-white/20 tracking-wider">
                  {cat.tagline}
                </div>

                <div className="absolute top-3 right-3 bg-[#FF5400] text-white text-[11px] font-bold px-2 py-0.5 rounded shadow">
                  {cat.itemsCount}
                </div>
              </div>

              {/* Solid Orange Label Button directly underneath like screenshot */}
              <div className="w-full mt-3">
                <div className="w-full py-2.5 px-4 bg-[#FF5400] group-hover:bg-[#E61E54] text-white font-bebas text-lg tracking-wider text-center rounded border-2 border-[#181512] shadow-sm transition-colors">
                  {cat.name}
                </div>
                <div className="text-xs text-stone-500 font-hindi font-medium mt-1">
                  {cat.hindiName}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
