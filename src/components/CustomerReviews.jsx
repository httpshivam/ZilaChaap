import React, { useState, useEffect } from 'react';
import { Star, Camera, CheckCircle2, MessageSquarePlus, X, UploadCloud, ThumbsUp } from 'lucide-react';
import { initialReviews } from '../data/restaurantData';

export function CustomerReviews() {
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('zila_customer_reviews');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialReviews;
      }
    }
    return initialReviews;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [dish, setDish] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem('zila_customer_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('Please upload an image smaller than 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    setIsSubmitting(true);

    const newReview = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      city: 'Verified Foodie',
      rating,
      dish: dish.trim() || 'Zila Chaap Special',
      comment: comment.trim(),
      date: 'Just now',
      verified: true,
      image: imagePreview || '/images/masala_chaap.jpg'
    };

    setTimeout(() => {
      setReviews([newReview, ...reviews]);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      setTimeout(() => {
        setSubmitSuccess(false);
        setIsModalOpen(false);
        // Reset form
        setName('');
        setDish('');
        setRating(5);
        setComment('');
        setImagePreview(null);
      }, 1500);
    }, 600);
  };

  return (
    <section id="reviews" className="py-16 bg-[#FAF6EF] border-t-2 border-[#181512]">
      <div className="container-max">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#E61E54] font-bebas text-lg tracking-widest uppercase">
              <Star className="w-4 h-4 fill-[#E61E54]" />
              <span>REAL FOODIES • REAL OPINIONS</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-[#181512] leading-tight">
              CUSTOMER REVIEWS / <span className="text-[#FF5400]">रिव्यू</span>
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex text-[#FDB813]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FDB813]" />
                ))}
              </div>
              <span className="font-bold text-stone-900 text-lg">4.9 / 5.0</span>
              <span className="text-stone-500 text-sm">
                (Based on 1,450+ verified Google & WhatsApp ratings)
              </span>
            </div>
          </div>

          {/* Add Review Action */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-primary flex items-center gap-2 self-start md:self-end"
          >
            <Camera className="w-5 h-5" />
            <span>ADD REVIEW WITH PHOTO / फोटो के साथ रिव्यू दें</span>
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="pop-card bg-white p-5 flex flex-col justify-between overflow-hidden group hover:border-[#FF5400]"
            >
              <div>
                {/* Review Photo if present */}
                {rev.image && (
                  <div className="relative aspect-[4/3] rounded-md overflow-hidden mb-4 border border-stone-200 bg-stone-100">
                    <img
                      src={rev.image}
                      alt={rev.dish}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-2 left-2 bg-[#181512]/80 backdrop-blur-sm text-white text-[11px] px-2 py-0.5 rounded font-medium">
                      🍽️ {rev.dish}
                    </div>
                  </div>
                )}

                {/* Stars and Verified */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex text-[#FDB813]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating ? 'fill-[#FDB813]' : 'text-stone-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400">{rev.date}</span>
                </div>

                {/* Feedback Comment */}
                <p className="text-stone-700 text-sm italic leading-relaxed mb-4">
                  "{rev.comment}"
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-stone-900 text-sm flex items-center gap-1">
                    <span>{rev.name}</span>
                    {rev.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500 text-white" />
                    )}
                  </div>
                  <div className="text-[11px] text-stone-500">{rev.city}</div>
                </div>
                <div className="text-stone-400 hover:text-[#E61E54] cursor-pointer">
                  <ThumbsUp className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for adding review with image upload */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-xl border-3 border-[#181512] shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative">
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-md border-2 border-[#181512] bg-[#FAF6EF] hover:bg-stone-200 text-stone-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 text-[#E61E54] font-bebas text-sm tracking-wider uppercase mb-1">
                  <MessageSquarePlus className="w-4 h-4" />
                  <span>SHARE YOUR TASTE EXPERIENCE</span>
                </div>
                <h3 className="font-display text-3xl text-[#181512]">
                  WRITE A REVIEW / रिव्यू दें
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Upload your photo of the food and tell others about your experience!
                </p>
              </div>

              {submitSuccess ? (
                <div className="py-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-3" />
                  <h4 className="font-display text-3xl text-stone-900">
                    THANK YOU FOR YOUR REVIEW! 🎉
                  </h4>
                  <p className="text-sm text-stone-600 mt-1">
                    Your photo review has been published on the site.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  {/* Rating Selector */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase font-bebas text-sm mb-1">
                      YOUR RATING / रेटिंग *
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 transition-transform hover:scale-125 focus:outline-none"
                        >
                          <Star
                            className={`w-7 h-7 ${
                              star <= (hoverRating || rating)
                                ? 'fill-[#FDB813] text-[#FDB813]'
                                : 'text-stone-300'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="font-bold text-stone-700 text-sm ml-2">
                        {rating} Star{rating > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase font-bebas text-sm mb-1">
                      YOUR NAME / आपका नाम *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Vikas Gupta"
                      className="w-full px-3.5 py-2.5 rounded border-2 border-[#181512] bg-[#FAF6EF] focus:bg-white focus:outline-none focus:border-[#E61E54] text-sm"
                    />
                  </div>

                  {/* Dish name */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase font-bebas text-sm mb-1">
                      DISH ORDERED / कौन सी डिश खाई?
                    </label>
                    <input
                      type="text"
                      value={dish}
                      onChange={(e) => setDish(e.target.value)}
                      placeholder="e.g. Afghani Malai Chaap, Kurkure Momos"
                      className="w-full px-3.5 py-2.5 rounded border-2 border-[#181512] bg-[#FAF6EF] focus:bg-white focus:outline-none focus:border-[#E61E54] text-sm"
                    />
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase font-bebas text-sm mb-1">
                      YOUR REVIEW / अनुभव *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Taste kaisa tha? Spicy, crispy, creamy? Share your honest feedback..."
                      className="w-full px-3.5 py-2.5 rounded border-2 border-[#181512] bg-[#FAF6EF] focus:bg-white focus:outline-none focus:border-[#E61E54] text-sm"
                    ></textarea>
                  </div>

                  {/* Image Upload with Preview */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase font-bebas text-sm mb-1">
                      UPLOAD PHOTO / खाने की फोटो अपलोड करें
                    </label>

                    {imagePreview ? (
                      <div className="relative rounded-md overflow-hidden border-2 border-[#181512] aspect-[16/9] bg-stone-100 mb-2">
                        <img
                          src={imagePreview}
                          alt="Review Preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => setImagePreview(null)}
                          className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full shadow hover:bg-red-700"
                          title="Remove image"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-[#181512] rounded-md bg-[#FAF6EF] hover:bg-[#F3ECE0] cursor-pointer transition-colors">
                        <UploadCloud className="w-8 h-8 text-[#FF5400] mb-2" />
                        <span className="text-xs font-bold text-stone-800">
                          Click to upload food photo
                        </span>
                        <span className="text-[10px] text-stone-500 mt-0.5">
                          PNG, JPG up to 5MB
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#E61E54] hover:bg-[#C91444] text-white font-bebas text-lg rounded border-2 border-[#181512] shadow-pop transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>{isSubmitting ? 'POSTING REVIEW...' : 'SUBMIT REVIEW / रिव्यू सबमिट करें'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
