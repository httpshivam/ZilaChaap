import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Clock, Check, Copy, AlertCircle, Sparkles, Gift, Flame, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { restaurantInfo } from '../data/restaurantData';

export function OfferClaimModal({ isOpen, onClose, initialOffer = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    consent: true
  });
  const [activeCoupon, setActiveCoupon] = useState(null);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [isExpired, setIsExpired] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  // Helper for today's date key YYYY-MM-DD
  const getTodayKey = () => new Date().toISOString().slice(0, 10);

  // Check for existing active coupon on mount or when modal opens
  useEffect(() => {
    if (!isOpen) return;

    try {
      const storedActive = localStorage.getItem('zila_active_coupon');
      if (storedActive) {
        const coupon = JSON.parse(storedActive);
        const remaining = Math.floor((coupon.expiresAt - Date.now()) / 1000);
        if (remaining > 0) {
          setActiveCoupon(coupon);
          setTimeLeft(remaining);
          setIsExpired(false);
          setErrorMessage('');
        } else {
          setActiveCoupon(coupon);
          setTimeLeft(0);
          setIsExpired(true);
        }
      } else {
        setActiveCoupon(null);
        setErrorMessage('');
      }
    } catch {
      setActiveCoupon(null);
    }
  }, [isOpen]);

  // Countdown timer effect
  useEffect(() => {
    if (!activeCoupon) return;

    const interval = setInterval(() => {
      const remaining = Math.max(0, Math.floor((activeCoupon.expiresAt - Date.now()) / 1000));
      setTimeLeft(remaining);

      if (remaining <= 0) {
        setIsExpired(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeCoupon]);

  if (!isOpen) return null;

  // Format seconds to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Generate 5-character alphanumeric uppercase code
  const generate5CharCode = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'; // Avoid 0, O, 1, I for readability
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    const trimmedName = formData.name.trim();
    const cleanPhone = formData.phone.replace(/\D/g, '');
    const cleanEmail = formData.email.trim().toLowerCase();

    if (!trimmedName || trimmedName.length < 2) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMessage('Please enter a valid 10-digit mobile number (+91).');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!formData.consent) {
      setErrorMessage('Please accept the privacy policy to proceed.');
      return;
    }

    const todayKey = getTodayKey();

    // Check if customer already generated a code today (1 order/code per day per customer rule)
    try {
      const historyStr = localStorage.getItem('zila_coupon_history') || '{}';
      const history = JSON.parse(historyStr);

      const phoneKey = `${cleanPhone}_${todayKey}`;
      const emailKey = `${cleanEmail}_${todayKey}`;

      const existingRecord = history[phoneKey] || history[emailKey];

      if (existingRecord) {
        const remaining = Math.floor((existingRecord.expiresAt - Date.now()) / 1000);
        if (remaining > 0) {
          // Still active! Restore it
          setActiveCoupon(existingRecord);
          setTimeLeft(remaining);
          setIsExpired(false);
          localStorage.setItem('zila_active_coupon', JSON.stringify(existingRecord));
          return;
        } else {
          // Expired today, blocked from generating another code today
          setErrorMessage(
            `You have already claimed today's (${todayKey}) 10% OFF code (${existingRecord.code}). As per policy, each customer can claim only 1 coupon code per day. You can generate a new code tomorrow!`
          );
          return;
        }
      }

      // Generate new 5-character code
      const newCode = generate5CharCode();
      const now = Date.now();
      const expiresAt = now + 10 * 60 * 1000; // strictly 10 minutes

      const couponObj = {
        code: newCode,
        name: trimmedName,
        phone: cleanPhone,
        email: cleanEmail,
        discount: '10% FLAT OFF',
        generatedAt: now,
        expiresAt,
        dateKey: todayKey,
        offerName: initialOffer ? initialOffer.title : 'Food Court 10% Counter Pass'
      };

      // Save to active coupon & history
      localStorage.setItem('zila_active_coupon', JSON.stringify(couponObj));
      history[phoneKey] = couponObj;
      history[emailKey] = couponObj;
      localStorage.setItem('zila_coupon_history', JSON.stringify(history));

      // Append to leads list
      const leadsStr = localStorage.getItem('zila_customer_leads') || '[]';
      const leads = JSON.parse(leadsStr);
      leads.push({ ...couponObj, timestamp: new Date().toISOString() });
      localStorage.setItem('zila_customer_leads', JSON.stringify(leads));

      // Set active in UI
      setActiveCoupon(couponObj);
      setTimeLeft(600);
      setIsExpired(false);

      // Confetti burst
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // fallback
      }
    } catch {
      setErrorMessage('Coupon generate karne me takleef hui, kripya dobara koshish karein.');
    }
  };

  const handleCopyCode = () => {
    if (!activeCoupon) return;
    navigator.clipboard.writeText(activeCoupon.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Progress percentage for 10 min (600s)
  const progressPercent = Math.max(0, Math.min(100, (timeLeft / 600) * 100));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-2xl border-3 border-[#181512] shadow-2xl max-w-lg w-full overflow-hidden relative my-auto">
        {/* Top Header */}
        <div className="px-5 py-3.5 bg-[#FAF6EF] border-b-2 border-[#181512] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-[#FFEBF0] text-[#E61E54] border border-[#E61E54]/30">
              <Gift className="w-5 h-5 text-[#E61E54]" />
            </span>
            <div>
              <h3 className="font-display text-xl sm:text-2xl text-[#181512] leading-tight">
                {activeCoupon ? 'YOUR 10% OFF COUNTER PASS' : 'CLAIM 10% OFF FOOD COURT PASS'}
              </h3>
              <p className="text-[11px] text-stone-500 font-sans">
                {restaurantInfo.location} • Live Roadside Tandoor Stall
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border-2 border-[#181512] bg-white hover:bg-stone-100 text-stone-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 space-y-4 max-h-[85vh] overflow-y-auto">
          {activeCoupon ? (
            /* ACTIVE COUPON / TIMER VIEW */
            <div className="space-y-5 text-center">
              {/* Status Banner */}
              {!isExpired ? (
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-green-100 border border-green-500 text-green-800 text-xs font-bold uppercase tracking-wider animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-green-600"></span>
                  <span>10-MINUTE LIVE COUNTDOWN RUNNING</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 border border-red-500 text-red-800 text-xs font-bold uppercase tracking-wider">
                  <AlertCircle className="w-3.5 h-3.5 text-red-600" />
                  <span>CODE EXPIRED (10 MINUTES ELAPSED)</span>
                </div>
              )}

              {/* 5-Character Code Big Display Card */}
              <div
                className={`p-6 rounded-2xl border-3 border-[#181512] relative overflow-hidden transition-all ${
                  isExpired ? 'bg-stone-100 opacity-80' : 'bg-gradient-to-b from-[#FFF2E6] to-[#FFEBF0] shadow-pop'
                }`}
              >
                <div className="text-xs font-bebas tracking-widest text-stone-600 mb-1">
                  COUNTER DISCOUNT CODE (5 CHARACTERS)
                </div>

                {/* The 5 Characters */}
                <div className="my-2 flex justify-center items-center gap-2 sm:gap-3">
                  {activeCoupon.code.split('').map((char, index) => (
                    <span
                      key={index}
                      className={`w-12 h-14 sm:w-14 sm:h-16 flex items-center justify-center font-display text-3xl sm:text-4xl rounded-xl border-2 border-[#181512] bg-white shadow-sm font-black ${
                        isExpired ? 'line-through text-stone-400' : 'text-[#E61E54]'
                      }`}
                    >
                      {char}
                    </span>
                  ))}
                </div>

                <div className="font-display text-2xl text-[#181512] mt-2">
                  FLAT 10% OFF ON YOUR BILL
                </div>
                <div className="text-xs font-hindi text-[#FF5400] font-bold">
                  फूड कोर्ट काउंटर पर यह कोड दिखाएं!
                </div>

                {/* Copy Button */}
                {!isExpired && (
                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={handleCopyCode}
                      className="px-4 py-2 rounded-lg border-2 border-[#181512] bg-white hover:bg-stone-50 text-stone-900 font-bebas text-sm flex items-center gap-2 shadow-sm transition-all hover:scale-105"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-green-700 font-sans font-bold">COPIED TO CLIPBOARD!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#FF5400]" />
                          <span>COPY 5-CHAR CODE</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* 10-Minute Countdown Clock */}
              <div className="bg-[#FAF6EF] p-4 rounded-xl border-2 border-[#181512] space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-stone-700">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#FF5400]" />
                    <span>REMAINING VALIDITY TIME:</span>
                  </span>
                  <span
                    className={`font-mono text-lg font-black tracking-wider ${
                      timeLeft <= 60 ? 'text-red-600 animate-ping' : 'text-[#E61E54]'
                    }`}
                  >
                    {formatTime(timeLeft)}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden border border-stone-400">
                  <div
                    className={`h-full transition-all duration-1000 ${
                      timeLeft <= 60 ? 'bg-red-600' : 'bg-gradient-to-r from-[#FF5400] to-[#E61E54]'
                    }`}
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>

                <p className="text-[11px] text-stone-500 text-left pt-1">
                  This code is strictly valid for the next <strong>10 minutes</strong> at the stall counter.
                </p>
              </div>

              {/* Rule & Counter Guidelines */}
              <div className="text-left text-xs bg-stone-50 border border-stone-200 rounded-xl p-3.5 space-y-2 text-stone-700">
                <div className="font-bold text-stone-900 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-[#FF5400]" />
                  <span>Important Counter Instructions:</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-stone-600">
                  <li>
                    <strong>1 Order Per Day Limit:</strong> Each customer is permitted only 1 discount code per day.
                  </li>
                  <li>
                    <strong>Live Counter Verification:</strong> Present this screen or mention the 5-character code when ordering at our stall ({restaurantInfo.location}).
                  </li>
                  <li>
                    <strong>Customer:</strong> {activeCoupon.name} (+91 {activeCoupon.phone})
                  </li>
                </ul>
              </div>

              {/* Close / Done Action */}
              <button
                onClick={onClose}
                className="w-full btn-primary py-3 text-base"
              >
                GOT IT, SHOW AT COUNTER
              </button>
            </div>
          ) : (
            /* FORM VIEW (NAME, PHONE, EMAIL & PRIVACY POLICY) */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-sm text-stone-700 leading-relaxed">
                Enter your details to generate your exclusive <strong>5-character secret code</strong>. Present this code at our food counter to receive <strong>Flat 10% OFF</strong> on your bill (Valid for 10 minutes).
              </div>

              {/* Error Box */}
              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-50 border-2 border-red-400 text-red-700 text-xs sm:text-sm flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Input: Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1">
                  Full Name <span className="text-[#E61E54]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border-2 border-[#181512] focus:border-[#FF5400] focus:outline-none text-sm font-sans bg-stone-50 focus:bg-white"
                />
              </div>

              {/* Input: Phone */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1">
                  Mobile Number (10 Digits) <span className="text-[#E61E54]">*</span>
                </label>
                <div className="flex items-center rounded-lg border-2 border-[#181512] bg-stone-50 overflow-hidden focus-within:border-[#FF5400] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#FF5400]/20 transition-all">
                  <span className="bg-stone-200/80 border-r-2 border-[#181512] px-3.5 py-2.5 font-mono text-sm font-bold text-stone-800 select-none shrink-0">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                    className="w-full px-3.5 py-2.5 text-sm font-mono font-bold text-stone-900 bg-transparent focus:outline-none tracking-wider placeholder:text-stone-400 placeholder:font-normal"
                  />
                </div>
                <p className="text-[11px] text-stone-500 mt-1">
                  Limit: 1 coupon code per customer per day.
                </p>
              </div>

              {/* Input: Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1">
                  Email Address <span className="text-[#E61E54]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border-2 border-[#181512] focus:border-[#FF5400] focus:outline-none text-sm font-sans bg-stone-50 focus:bg-white"
                />
              </div>

              {/* PRIVACY POLICY & CONFIDENTIALITY NOTICE BOX */}
              <div className="p-3.5 rounded-xl bg-[#FFF9F5] border-2 border-stone-300 space-y-2">
                <div className="flex items-center gap-1.5 text-stone-900 font-bold text-xs">
                  <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Privacy Policy & Data Security Guarantee</span>
                </div>
                <p className="text-[11px] text-stone-600 leading-relaxed font-sans">
                  <strong>Privacy Policy:</strong> We collect your personal information (Full Name, Mobile Number, and Email ID) solely to deliver Zila Chaap exclusive festival offers, weekend discount passes, and secret menu deals directly to you. Your information remains <strong>100% confidential and secure</strong>, and will never be shared, rented, or sold to any third party.
                </p>

                <label className="flex items-start gap-2 pt-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded text-[#E61E54] border-[#181512] focus:ring-0"
                  />
                  <span className="text-[11px] text-stone-700 font-medium">
                    I agree to receive promotional offers and discount updates from Zila Chaap.
                  </span>
                </label>
              </div>

              {/* Submission Button */}
              <button
                type="submit"
                className="w-full btn-primary py-3 text-base flex items-center justify-center gap-2 shadow-pop hover:scale-[1.01] transition-transform"
              >
                <Sparkles className="w-4 h-4 fill-white" />
                <span>GENERATE 10% OFF CODE (VALID FOR 10 MIN)</span>
              </button>

              <div className="text-center text-[11px] text-stone-500 flex items-center justify-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-stone-400" />
                <span>Strict Limit: 1 Order / 1 Code per customer per day</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
