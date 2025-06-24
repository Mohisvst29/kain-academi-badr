import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, User, Quote } from 'lucide-react';

const LiveReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const reviews = [
    {
      name: 'أحمد محمد علي',
      grade: 'الثانوية العامة',
      rating: 5,
      comment: 'أكاديمية كيان ساعدتني كثيراً في تحسين درجاتي. المدرسون ممتازون والشرح واضح جداً. أنصح بها بشدة!',
      date: 'منذ يومين'
    },
    {
      name: 'فاطمة أحمد حسن',
      grade: 'ولي أمر - الإعدادية',
      rating: 5,
      comment: 'بيئة تعليمية رائعة ومدرسين متفهمين. ابنتي تحسنت كثيراً في الرياضيات والعلوم. شكراً لكم',
      date: 'منذ 3 أيام'
    },
    {
      name: 'محمد علي حسين',
      grade: 'ولي أمر - الابتدائية',
      rating: 5,
      comment: 'ولدي يحب الذهاب للأكاديمية. الطريقة التعليمية ممتعة والمكان نظيف ومرتب. أفضل سنتر في مدينة بدر',
      date: 'منذ أسبوع'
    },
    {
      name: 'سارة محمود',
      grade: 'الثانوية العامة',
      rating: 5,
      comment: 'تجربة رائعة مع أكاديمية كيان. المدرسين صبورين ويشرحون بطريقة مفهومة. درجاتي تحسنت بشكل ملحوظ',
      date: 'منذ أسبوع'
    },
    {
      name: 'خالد أحمد',
      grade: 'ولي أمر - الإعدادية',
      rating: 5,
      comment: 'أفضل استثمار لمستقبل أولادي. النتائج واضحة والتحسن ملموس. أشكركم على الجهد المبذول',
      date: 'منذ أسبوعين'
    },
    {
      name: 'نور الهدى',
      grade: 'الثانوية العامة',
      rating: 5,
      comment: 'مكان رائع للتعلم. الأساتذة محترفين والمناهج واضحة. أنصح كل طالب يريد التفوق بالانضمام',
      date: 'منذ أسبوعين'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  useEffect(() => {
    const visibilityInterval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 8000);

    return () => clearInterval(visibilityInterval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-40 max-w-sm"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-primary-100"
            whileHover={{ scale: 1.02 }}
            animate={{ 
              boxShadow: [
                "0 10px 25px rgba(0,0,0,0.1)",
                "0 15px 35px rgba(102, 126, 234, 0.2)",
                "0 10px 25px rgba(0,0,0,0.1)"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-full">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">{reviews[currentReview].name}</h4>
                  <p className="text-xs text-gray-500">{reviews[currentReview].grade}</p>
                </div>
              </div>
              <div className="flex space-x-1 space-x-reverse">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <div className="relative">
              <Quote className="h-4 w-4 text-primary-300 mb-2" />
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                "{reviews[currentReview].comment}"
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{reviews[currentReview].date}</span>
              <div className="flex space-x-1 space-x-reverse">
                {reviews.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentReview ? 'bg-primary-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-center space-x-2 space-x-reverse text-xs text-primary-600">
                <span>تقييم حقيقي من عملائنا</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LiveReviews;