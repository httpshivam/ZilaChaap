import React from 'react';
import { Flame, Award, Heart, CheckCircle2, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export function AboutStory() {
  return (
    <section className="py-16 bg-white border-t-2 border-[#181512]">
      <div className="container-max">
        {/* Full Banner Display as in workspace assets */}
        <div className="mb-12 rounded-xl overflow-hidden border-3 border-[#181512] shadow-pop">
          <img
            src="/Banner.jpg"
            alt="Zila Chaap Official Banner"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Brand Story */}
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#E61E54] font-bebas text-lg tracking-widest uppercase mb-1">
              <Flame className="w-4 h-4 fill-[#E61E54]" />
              <span>THE TASTE OF ROADSIDE STREET FOOD</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-[#181512] leading-tight mb-4">
              ROADSIDE FOOD COURT PAR <span className="text-[#FF5400]">ASLI TANDOOR KA MAZA</span>
            </h2>
            <div className="text-stone-700 space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                <strong>Zila Chaap</strong> road-side food court ka ek aisa live counter hai jahan sham hote hi tandoor ki mehak aur seekh par sikti soya chaap foodies ko kheench laati hai. Hamara wada hai —{' '}
                <span className="font-hindi text-[#E61E54] font-bold">
                  "एक बार खाओगे, बार-बार आओगे!"
                </span>
              </p>
              <p>
                Yahan doston ke sath khade hokar garam-garam Malai Chaap, Tandoori Masala Chaap ke sath fresh Rumali Roti (₹10) khana ya car me baithkar plate lagwana ek alag hi sukoon deta hai!
              </p>
              <p>
                Aur bamboo steamer se nikle halke, translucent Veg Momos (₹40) aur Paneer Momos (₹50) teekhi laal lehsun chutney ke sath aapke taste buds ko khush kar denge. 100% Shuddh Shakahari aur pocket-friendly rates!
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-stone-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span className="font-bold text-xs sm:text-sm text-stone-800">
                  Live Clay Oven Tandoor
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span className="font-bold text-xs sm:text-sm text-stone-800">
                  Car-Side & Takeaway Service
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span className="font-bold text-xs sm:text-sm text-stone-800">
                  100% Pure Veg & Hygienic
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span className="font-bold text-xs sm:text-sm text-stone-800">
                  Affordable Food Court Rates
                </span>
              </div>
            </div>
          </div>

          {/* Right: Visual Card with Chef Mascot */}
          <div className="pop-card p-6 md:p-8 bg-[#FAF6EF] relative overflow-hidden flex flex-col items-center text-center">
            <div className="relative mb-4">
              <img
                src="/logo.png"
                alt="Zila Chaap Mascot"
                className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-[#181512] shadow-pop bg-white animate-spin-loop"
              />
              <div className="absolute -bottom-2 bg-[#FF5400] text-white font-bebas text-xs px-3 py-1 rounded-full border border-black shadow">
                LIVE STALL COUNTER
              </div>
            </div>

            <h3 className="font-display text-3xl text-[#181512] mb-1">
              "KHAOGE EK BAAR, YAAD RAKHOGE HAR BAAR!"
            </h3>
            <p className="text-xs text-stone-600 max-w-sm mb-6 font-hindi font-medium">
              मलाई चाप, तंदूरी मसाला चाप, अफगानी चाप, अचारी चाप, वेज मोमोज़, पनीर मोमोज़ और रुमाली रोटी — ज़िला चाप फूड कोर्ट!
            </p>

            <div className="w-full grid grid-cols-2 gap-3 pt-4 border-t-2 border-dashed border-stone-300">
              <div className="p-3 bg-white rounded border border-[#181512]">
                <div className="font-display text-2xl text-[#E61E54]">₹40 Se Shuru</div>
                <div className="text-[11px] font-bold text-stone-600 uppercase font-bebas">Steaming Momos</div>
              </div>
              <div className="p-3 bg-white rounded border border-[#181512]">
                <div className="font-display text-2xl text-[#FF5400]">₹100 Se Shuru</div>
                <div className="text-[11px] font-bold text-stone-600 uppercase font-bebas">Tandoori Chaap</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
