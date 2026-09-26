import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let message = `🍽️ *NEW ORDER - ZILA CHAAP*\n`;
    message += `------------------------------------\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* x ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });
    message += `------------------------------------\n`;
    message += `💰 *Total Amount:* ₹${totalAmount}\n\n`;

    if (customerName.trim()) {
      message += `👤 *Customer Name:* ${customerName.trim()}\n`;
    }
    if (address.trim()) {
      message += `📍 *Delivery Address:* ${address.trim()}\n`;
    }
    if (notes.trim()) {
      message += `📝 *Instructions:* ${notes.trim()}\n`;
    }
    message += `\nPlease confirm my order and share estimated preparation time. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${restaurantInfo.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l-3 border-[#181512] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 bg-[#FAF6EF] border-b-2 border-[#181512] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#E61E54]" />
              <h3 className="font-display text-2xl text-[#181512]">
                YOUR FOOD BAG ({cart.reduce((sum, i) => sum + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-md border-2 border-[#181512] bg-white hover:bg-stone-100"
            >
              <X className="w-5 h-5 text-stone-800" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {cart.length === 0 ? (
              <div className="py-16 text-center text-stone-500">
                <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto mb-3" />
                <p className="font-bebas text-xl text-stone-800">YOUR BAG IS EMPTY</p>
                <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                  Add some delicious Tandoori Chaap or piping hot Momos to get started!
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 bg-[#FAF6EF] rounded-lg border-2 border-stone-200"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded border border-stone-300 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-stone-900 truncate">
                      {item.name}
                    </h4>
                    <div className="text-xs font-bold text-[#E61E54]">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-1.5 bg-white border border-stone-300 rounded px-1.5 py-0.5">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="p-0.5 hover:text-red-600 transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-5 text-center text-xs font-bold font-sans">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="p-0.5 hover:text-green-600 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-stone-400 hover:text-red-600 p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}

            {/* Customer Details Form if cart has items */}
            {cart.length > 0 && (
              <div className="pt-4 border-t border-stone-200 space-y-3">
                <div className="font-bebas text-base text-stone-700 tracking-wider">
                  DELIVERY / ORDER DETAILS (OPTIONAL)
                </div>
                <div>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Your Name (e.g. Aman)"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded bg-[#FAF6EF] focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Delivery Address / Landmark (or Dine-in Table)"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded bg-[#FAF6EF] focus:bg-white focus:outline-none"
                  ></textarea>
                </div>
                <div>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Special request (e.g. Extra spicy red chutney)"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded bg-[#FAF6EF] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer Checkout */}
          {cart.length > 0 && (
            <div className="p-4 bg-[#FAF6EF] border-t-2 border-[#181512] space-y-3">
              <div className="flex justify-between items-center text-stone-900">
                <span className="font-bebas text-lg">TOTAL BILL</span>
                <span className="font-display text-3xl text-[#E61E54]">
                  ₹{totalAmount}
                </span>
              </div>

              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bebas text-xl rounded border-2 border-[#181512] shadow-pop transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>ORDER DIRECT ON WHATSAPP</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onClearCart}
                className="w-full text-center text-[11px] text-stone-500 hover:text-red-600 underline font-medium"
              >
                Clear all items
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
