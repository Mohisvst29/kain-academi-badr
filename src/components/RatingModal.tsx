import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X, Send } from 'lucide-react';

const RatingModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hasRated, setHasRated] = useState(false);

  useEffect(() => {
    // إظهار نافذة التقييم بعد 10 ثوان من دخول الموقع
    const timer = setTimeout(() => {
      const hasRatedBefore = localStorage.getItem('hasRated');
      if (!hasRatedBefore) {
        setShowModal(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmitRating = () => {
    if (rating === 0) {
      alert('يرجى اختيار تقييم أولاً');
      return;
    }

    // إرسال التقييم إلى Google Maps بدلاً من واتساب
    const googleMapsUrl = 'https://maps.app.goo.gl/Nwbd2C5oE1nyiQWd8';
    window.open(googleMapsUrl, '_blank');

    localStorage.setItem('hasRated', 'true');
    setHasRated(true);
    setShowModal(false);
    
    setTimeout(() => {
      alert('شكراً لك على تقييمك! تم توجيهك لصفحة التقييم على خرائط جوجل');
    }, 1000);
  };

  return (
    <AnimatePresence>
      {showModal && !hasRated && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold gradient-text">قيم تجربتك معنا</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="text-center mb-6">
              <p className="text-gray-600 mb-4">كيف كانت تجربتك مع أكاديمية كيان؟</p>
              
              {/* Star Rating */}
              <div className="flex justify-center space-x-1 space-x-reverse mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="transition-colors duration-200"
                  >
                    <Star
                      className={`h-8 w-8 ${
                        star <= rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>

              {rating > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4"
                >
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="شاركنا رأيك (اختياري)"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors resize-none"
                    rows={3}
                  />
                </motion.div>
              )}
            </div>

            <div className="flex space-x-3 space-x-reverse">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-6 py-3 border-2 border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors"
              >
                ربما لاحقاً
              </button>
              <motion.button
                onClick={handleSubmitRating}
                disabled={rating === 0}
                className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 space-x-reverse"
                whileHover={{ scale: rating > 0 ? 1.02 : 1 }}
                whileTap={{ scale: rating > 0 ? 0.98 : 1 }}
              >
                <Send className="h-4 w-4" />
                <span>قيم على جوجل</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RatingModal;