export const restaurantInfo = {
  name: "ZILA CHAAP",
  tagline: "एक बार खाओगे, बार-बार आओगे!",
  stallType: "Live Roadside Food Court & Tandoor Kiosk",
  subline: "Authentic Delhi-Style Soya Chaap & Steaming Momos on the Street",
  phones: ["+91 97589 18395", "+91 75181 39250"],
  whatsappNumber: "919758918395",
  whatsappCommunityUrl: "https://chat.whatsapp.com/invite/ZilaChaapCommunity",
  timing: "6:00 PM - 10:30 PM (Daily Fresh Live Batches)",
  location: "Ek Murti, Greater Noida West",
  swiggyUrl: "https://www.swiggy.com",
  zomatoUrl: "https://www.zomato.com",
  menuPdfUrl: "/menu.pdf"
};

export const offersData = [
  {
    id: 1,
    badge: "STALL COUNTER OFFER",
    discount: "FLAT 20% OFF",
    title: "Food Court Special",
    desc: "Mention code ZILA20 at our roadside counter on bill above ₹299 to get instant 20% off!",
    code: "ZILA20",
    color: "#E61E54"
  },
  {
    id: 2,
    badge: "FREEBIE",
    discount: "FREE MOMOS",
    title: "Steamed Momos Treat",
    desc: "Order any 2 Full Chaap at the food stall and get 1 plate Veg Momos completely FREE!",
    code: "FREEMOMO",
    color: "#FF5400"
  },
  {
    id: 3,
    badge: "FOOD COURT COMBO",
    discount: "ROTI FREE COMBO",
    title: "Chaap + Rumali Roti",
    desc: "Order 1 Full Gravy Chaap and get 2 hot Rumali Rotis on the house!",
    code: "ROTIFREE",
    color: "#8B18D6"
  },
  {
    id: 4,
    badge: "WHATSAPP VIP PASS",
    discount: "WEEKEND PASS",
    title: "Food Court Flash Offers",
    desc: "Join our WhatsApp Foodie Community for secret late-night offers & priority stall service.",
    code: "VIPSTALL",
    color: "#1FAF54"
  }
];

export const categoriesData = [
  {
    id: "chaap",
    name: "Tandoori Soya Chaap",
    hindiName: "तंदूरी व मसाला चाप",
    tagline: "Live Charcoal Tandoor",
    image: "/images/street_masala_chaap.jpg",
    itemsCount: "11 Dishes • ₹100 se shuru"
  },
  {
    id: "malai",
    name: "Creamy Malai Chaap",
    hindiName: "मलाईदार अफ़गानी चाप",
    tagline: "Rich Butter Cream Toss",
    image: "/images/street_malai_chaap.jpg",
    itemsCount: "Half ₹100 / Full ₹180"
  },
  {
    id: "momos",
    name: "Steamed Momos",
    hindiName: "वेज व पनीर स्टीम्ड मोमोज़",
    tagline: "Live Aluminium Steamer",
    image: "/images/street_steamed_momos.jpg",
    itemsCount: "Veg ₹40 • Paneer ₹50"
  },
  {
    id: "rotis",
    name: "Tawa & Tandoor Breads",
    hindiName: "रुमाली व तंदूरी रोटी",
    tagline: "Hand-Tossed On Tawa",
    image: "/images/street_rumali_roti.jpg",
    itemsCount: "₹10 / ₹14 pc"
  }
];

// Exact 11 Chaap items from the official rate card
export const chaapItems = [
  { id: "c1", name: "Malai Chaap", hindiName: "मलाई चाप", halfPrice: 100, fullPrice: 180, isBestseller: true, spicyLevel: 1 },
  { id: "c2", name: "Tandoori Masala Chaap", hindiName: "तंदूरी मसाला चाप", halfPrice: 100, fullPrice: 180, isBestseller: true, spicyLevel: 3 },
  { id: "c3", name: "Afghani Chaap", hindiName: "अफगानी चाप", halfPrice: 100, fullPrice: 190, isBestseller: true, spicyLevel: 1 },
  { id: "c4", name: "Soya Chaap", hindiName: "सोया चाप", halfPrice: 100, fullPrice: 180, isBestseller: false, spicyLevel: 2 },
  { id: "c5", name: "Achari Chaap", hindiName: "अचारी चाप", halfPrice: 110, fullPrice: 190, isBestseller: false, spicyLevel: 3 },
  { id: "c6", name: "Extra Butter Chaap", hindiName: "एक्स्ट्रा बटर चाप", halfPrice: 120, fullPrice: 200, isBestseller: true, spicyLevel: 2 },
  { id: "c7", name: "Pahadi Chaap", hindiName: "पहाड़ी चाप", halfPrice: 110, fullPrice: 190, isBestseller: false, spicyLevel: 2 },
  { id: "c8", name: "Mixed Chaap", hindiName: "मिक्स चाप", halfPrice: 120, fullPrice: 200, isBestseller: false, spicyLevel: 2 },
  { id: "c9", name: "Hariyali Chaap", hindiName: "हरियाली चाप", halfPrice: 120, fullPrice: 200, isBestseller: false, spicyLevel: 2 },
  { id: "c10", name: "Lemon Chaap", hindiName: "लेमन चाप", halfPrice: 100, fullPrice: 180, isBestseller: false, spicyLevel: 1 },
  { id: "c11", name: "Zila Special Chaap", hindiName: "ज़िला स्पेशल चाप", halfPrice: 120, fullPrice: 200, isBestseller: true, spicyLevel: 3 }
];

// Exact 2 Momos items from the official rate card (Only Veg & Paneer!)
export const momosItems = [
  { id: "m1", name: "Veg Momos", hindiName: "वेज मोमोज़", halfPrice: 40, fullPrice: 60, isBestseller: true, spicyLevel: 2 },
  { id: "m2", name: "Paneer Momos", hindiName: "पनीर मोमोज़", halfPrice: 50, fullPrice: 70, isBestseller: true, spicyLevel: 1 }
];

export const rotiItems = [
  { id: "r1", name: "Rumali Roti", hindiName: "रुमाली रोटी", price: "₹10 / pc", desc: "Fresh thin paper soft hand-tossed rumali roti on inverted tawa" },
  { id: "r2", name: "Tandoori Roti", hindiName: "तंदूरी रोटी", price: "₹14 / pc", desc: "Crisp clay tandoor baked whole wheat roti" }
];

export const initialReviews = [
  {
    id: "r1",
    name: "Sumit Rawat",
    city: "Street Foodie",
    rating: 5,
    dish: "Malai Chaap + Rumali Roti",
    comment: "Bhai roadside food court me aisi lajawab chaap kahi nahi milegi! Amul butter aur cream ka taste ekdum authentic Delhi style hai. Ek baar khaoge to bar-bar aaoge sach ho gaya!",
    date: "Yesterday",
    verified: true,
    image: "/images/street_malai_chaap.jpg"
  },
  {
    id: "r2",
    name: "Neha Joshi",
    city: "Momos Fan",
    rating: 5,
    dish: "Paneer Momos (₹50)",
    comment: "₹50 me itne badhiya paneer momos with teekhi lal chutney! Food court me khane ka maza hi alag hai garam-garam steamer se.",
    date: "3 days ago",
    verified: true,
    image: "/images/street_steamed_momos.jpg"
  },
  {
    id: "r3",
    name: "Harsh Vardhan",
    city: "Evening Regular",
    rating: 5,
    dish: "Tandoori Masala Chaap",
    comment: "Roadside stall par khade hokar doston ke sath garam chaap khana is best evening ritual. Smoky live tandoor aroma is 10/10.",
    date: "5 days ago",
    verified: true,
    image: "/images/street_masala_chaap.jpg"
  },
  {
    id: "r4",
    name: "Karan Gupta",
    city: "Local Guide",
    rating: 5,
    dish: "Rumali Roti + Chaap",
    comment: "Hand tossed live rumali roti for just ₹10! Super fast service and proper hygiene.",
    date: "1 week ago",
    verified: true,
    image: "/images/street_rumali_roti.jpg"
  }
];
