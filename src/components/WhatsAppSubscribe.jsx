import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { MessageCircle, Sparkles, CheckCircle2, Copy, ArrowRight, ShieldCheck, QrCode } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export function WhatsAppSubscribe() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [craving, setCraving] = useState('both');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#25D366', '#E61E54', '#FF5400', '#FDB813']
      });
    } catch {
      // fallback if confetti fails
    }

    // Save to localStorage
    const subscriber = {
      name,
      phone,
      craving,
      joinedAt: new Date().toISOString()
    };
    const existing = JSON.parse(localStorage.getItem('zila_subscribers') || '[]');
    existing.push(subscriber);
    localStorage.setItem('zila_subscribers', JSON.stringify(existing));

    setIsSubscribed(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText('ZILAVIP20');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // WhatsApp Community Invite URL
  const communityLink = `https://wa.me/${restaurantInfo.whatsappNumber}?text=${encodeURIComponent(
    `Hello Zila Chaap! My name is ${name || 'Foodie'} (${phone}). I have subscribed on your website and want to join the Zila Chaap VIP WhatsApp Community!`
  )}`;

  return (
    <section id="community" className="py-16 bg-[#F3ECE0] border-t-2 border-[#181512] relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="container-max relative z-10">
        <div className="pop-card bg-white p-6 md:p-12 overflow-hidden border-3 border-[#181512] relative">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 bg-[#EAFBF0] text-[#059669] border border-[#10B981] px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
              ZILA CHAAP VIP FOODIE CLUB
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-[#181512] leading-tight">
              JOIN OUR <span className="text-[#25D366]">WHATSAPP COMMUNITY</span>
            </h2>
            <p className="text-stone-600 text-sm md:text-base mt-2">
              Subscribe once to get instant flat <strong>20% OFF coupon</strong>, free momos offers, secret weekend tasting invites & direct priority order line!
            </p>
          </div>

          {!isSubscribed ? (
            /* Subscription Form */
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1 font-bebas text-sm">
                    YOUR FULL NAME / आपका नाम *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-md border-2 border-[#181512] bg-[#FAF6EF] focus:bg-white focus:outline-none focus:border-[#25D366] text-stone-900 font-medium transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1 font-bebas text-sm">
                    WHATSAPP PHONE NUMBER / व्हाट्सएप नंबर *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3.5 text-stone-500 font-bold text-sm">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="98765 43210"
                      className="w-full pl-14 pr-4 py-3 rounded-md border-2 border-[#181512] bg-[#FAF6EF] focus:bg-white focus:outline-none focus:border-[#25D366] text-stone-900 font-medium transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-bebas text-sm">
                    WHAT DO YOU LOVE MOST? / आपकी पसंदीदा डिश?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'chaap', label: '🔥 Soya Chaap' },
                      { id: 'momos', label: '🥟 Momos' },
                      { id: 'both', label: '⭐ Both Love!' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setCraving(opt.id)}
                        className={`py-2 px-2 text-xs font-bold rounded border-2 border-[#181512] transition-all ${
                          craving === opt.id
                            ? 'bg-[#FF5400] text-white shadow-sm'
                            : 'bg-[#FAF6EF] text-stone-700 hover:bg-[#F3ECE0]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 mt-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bebas text-xl rounded-md border-2 border-[#181512] shadow-pop transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>SUBSCRIBE & GET 20% OFF LINK</span>
                </button>

                <p className="text-[11px] text-center text-stone-500 flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                  100% Spam-free WhatsApp community. Only high-value foodie offers!
                </p>
              </div>
            </form>
          ) : (
            /* Subscribed Success Box with WhatsApp community link */
            <div className="max-w-xl mx-auto bg-[#FAF6EF] border-2 border-[#181512] rounded-xl p-6 md:p-8 text-center animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#181512] shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-display text-3xl md:text-4xl text-[#181512] mb-1">
                WELCOME TO THE FAMILY, {name.toUpperCase()}! 🎉
              </h3>
              <p className="text-stone-600 text-sm mb-6 font-hindi">
                आप सफलतापूर्वक Zila Chaap VIP क्लब से जुड़ गए हैं!
              </p>

              {/* Coupon card */}
              <div className="bg-white border-2 border-dashed border-[#E61E54] rounded-lg p-4 mb-6 relative">
                <span className="text-[10px] font-bebas tracking-widest text-[#E61E54] uppercase bg-[#FFEBF0] px-2 py-0.5 rounded border border-[#E61E54]">
                  YOUR EXCLUSIVE 20% DISCOUNT CODE
                </span>
                <div className="flex items-center justify-center gap-3 my-2">
                  <span className="font-mono text-2xl font-black text-[#181512] tracking-widest">
                    ZILAVIP20
                  </span>
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
                    title="Copy promo code"
                  >
                    {copiedCode ? (
                      <span className="text-xs font-bold text-green-600">COPIED!</span>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-stone-500">
                  Valid on your first WhatsApp order on all Chaap & Momos items.
                </p>
              </div>

              {/* Direct WhatsApp Community Button */}
              <a
                href={communityLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bebas text-xl rounded-md border-2 border-[#181512] shadow-pop transition-all flex items-center justify-center gap-2 mb-4"
              >
                <MessageCircle className="w-6 h-6 fill-white" />
                <span>TAP HERE TO JOIN WHATSAPP COMMUNITY NOW</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              {/* QR Code fallback banner snippet */}
              <div className="mt-4 pt-4 border-t border-stone-300 flex items-center justify-center gap-4 text-left">
                <div className="w-14 h-14 bg-white p-1 rounded border border-stone-300 shrink-0">
                  <img
                    src="/logo.png"
                    alt="Zila Chaap QR"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-xs text-stone-600">
                  <div className="font-bold text-[#181512]">Or Scan via WhatsApp Camera</div>
                  <div>Direct line: +91 97589 18395 / +91 75181 39250</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
