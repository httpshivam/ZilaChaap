import React from 'react';
import { X, Download, FileText, CheckCircle2, MessageCircle } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export function PdfMenuModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-xl border-3 border-[#181512] shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden relative">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#FAF6EF] border-b-2 border-[#181512] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#E61E54]" />
            <h3 className="font-display text-2xl text-[#181512]">
              ZILA CHAAP OFFICIAL RATE CARD & MENU PDF
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md border-2 border-[#181512] bg-white hover:bg-stone-100 text-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Preview */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-stone-50">
          {/* Download callout bar */}
          {/* Download callout bar */}
          <div className="p-4 bg-[#FFEBF0] border-2 border-[#E61E54] rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <div className="font-display text-xl text-[#E61E54]">
                READY TO DOWNLOAD OFFICIAL MENU PDF
              </div>
              <p className="text-xs text-stone-700">
                Official high-resolution print rate card & menu document (Size: 445 KB).
              </p>
            </div>
            <a
              href="/menu.pdf"
              download="Zila_Chaap_Menu.pdf"
              className="btn-primary py-2 px-4 text-sm flex items-center gap-1.5 shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD PDF NOW</span>
            </a>
          </div>

          {/* Official Rate Card Visual Preview */}
          <div className="border-2 border-[#181512] rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="bg-[#181512] text-white px-3 py-1.5 text-xs font-bebas tracking-wider flex justify-between items-center">
              <span>OFFICIAL RATE CARD PREVIEW / मेन्यू व रेट लिस्ट</span>
              <span className="text-[#FF5400] font-hindi">एक बार खाओगे, बार-बार आओगे!</span>
            </div>
            <div className="p-2 sm:p-4 bg-[#FAF6EF] flex justify-center">
              <img
                src="/menu-preview.png"
                alt="Zila Chaap Official Rate Card Menu"
                className="w-full max-w-md h-auto object-contain rounded border-2 border-[#181512] shadow-pop"
              />
            </div>
          </div>

          {/* Menu Highlights List matching PDF */}
          <div className="bg-white p-5 rounded-lg border-2 border-stone-300">
            <h4 className="font-display text-xl text-[#181512] mb-3">
              EXACT MENU ITEMS & RATES INCLUDED:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>11 Tandoori Soya Chaap Specialities (Half ₹100, Full ₹180-200)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>Malai & Afghani Chaap (Rich Cashew Cream)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>Pahadi, Achari, Hariyali & Lemon Chaap</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>Steaming Veg Momos (Half ₹40 / Full ₹60)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>Fresh Paneer Momos (Half ₹50 / Full ₹70)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>Hot Rumali Roti (₹10/pc) & Tandoori Roti (₹14/pc)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white border-t-2 border-[#181512] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-stone-500">
            For party orders & catering call: <strong>{restaurantInfo.phones[0]}</strong>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border-2 border-[#181512] rounded font-bebas text-sm hover:bg-stone-100"
            >
              CLOSE
            </button>
            <a
              href="/menu.pdf"
              download="Zila_Chaap_Full_Menu.pdf"
              className="btn-primary py-2 px-4 text-sm"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
