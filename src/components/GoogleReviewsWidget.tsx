import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

const GoogleReviewsWidget = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">تقييمات عملائنا على جوجل</h2>
          <p className="text-xl text-gray-600">اقرأ آراء طلابنا وأولياء الأمور الحقيقية</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Google Reviews Summary */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl mb-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-4 space-x-reverse mb-6">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                alt="Google" 
                className="h-8 w-8"
              />
              <h3 className="text-2xl font-bold text-gray-800">تقييمات جوجل</h3>
            </div>
            
            <div className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
              <div className="flex space-x-1 space-x-reverse">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-3xl font-bold text-gray-800">4.9</span>
            </div>
            
            <p className="text-gray-600 mb-6">بناءً على 50+ تقييم من عملائنا</p>
            
            <motion.a
              href="https://maps.app.goo.gl/Nwbd2C5oE1nyiQWd8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 space-x-reverse bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="h-5 w-5" />
              <span>اقرأ جميع التقييمات على جوجل</span>
            </motion.a>
          </motion.div>

          {/* Embedded Google Reviews */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">آخر التقييمات</h3>
            
            {/* Google Reviews Embed */}
            <div className="aspect-video rounded-xl overflow-hidden border-2 border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215.60136355641998!2d31.70411873621101!3d30.162226600000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457f9452f6b136d%3A0xbe668c18222ae6ff!2z2KPZg9in2K_ZitmF2YrYqSDZg9mK2KfZhiDYp9mE2KrYudmE2YrZhdmK2Kk!5e0!3m2!1sar!2ssa!4v1750744230272!5m2!1sar!2ssa&reviews=1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="تقييمات أكاديمية كيان على خرائط جوجل"
              />
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">
                شاهد جميع التقييمات والتعليقات مباشرة من خرائط جوجل
              </p>
              <motion.a
                href="https://maps.app.goo.gl/Nwbd2C5oE1nyiQWd8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center space-x-2 space-x-reverse"
                whileHover={{ scale: 1.05 }}
              >
                <span>قيمنا على جوجل</span>
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsWidget;