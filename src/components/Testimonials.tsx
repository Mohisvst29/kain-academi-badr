import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'أحمد محمد علي',
      grade: 'الثانوية العامة',
      rating: 5,
      comment: 'أكاديمية كيان ساعدتني كثيراً في تحسين درجاتي. المدرسون ممتازون والشرح واضح جداً. أنصح بها بشدة!',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      verified: true
    },
    {
      name: 'فاطمة أحمد حسن',
      grade: 'ولي أمر - الإعدادية',
      rating: 5,
      comment: 'بيئة تعليمية رائعة ومدرسين متفهمين. ابنتي تحسنت كثيراً في الرياضيات والعلوم. شكراً لكم',
      image: 'https://images.pexels.com/photos/8471822/pexels-photo-8471822.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      verified: true
    },
    {
      name: 'محمد علي حسين',
      grade: 'ولي أمر - الابتدائية',
      rating: 5,
      comment: 'ولدي يحب الذهاب للأكاديمية. الطريقة التعليمية ممتعة والمكان نظيف ومرتب. أفضل سنتر في مدينة بدر',
      image: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      verified: true
    },
    {
      name: 'سارة محمود',
      grade: 'الثانوية العامة',
      rating: 5,
      comment: 'تجربة رائعة مع أكاديمية كيان. المدرسين صبورين ويشرحون بطريقة مفهومة. درجاتي تحسنت بشكل ملحوظ',
      image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      verified: true
    },
    {
      name: 'خالد أحمد',
      grade: 'ولي أمر - الإعدادية',
      rating: 5,
      comment: 'أفضل استثمار لمستقبل أولادي. النتائج واضحة والتحسن ملموس. أشكركم على الجهد المبذول',
      image: 'https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      verified: true
    },
    {
      name: 'نور الهدى',
      grade: 'الثانوية العامة',
      rating: 5,
      comment: 'مكان رائع للتعلم. الأساتذة محترفين والمناهج واضحة. أنصح كل طالب يريد التفوق بالانضمام',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">آراء طلابنا وأولياء الأمور</h2>
          <p className="text-xl text-gray-600 mb-6">نفخر بثقة طلابنا وأولياء الأمور - تقييمات حقيقية من عملائنا</p>
          
          {/* Google Reviews Link */}
          <motion.a
            href="https://maps.app.goo.gl/WbyjMd3bBgwfDjEK8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 space-x-reverse bg-white text-primary-600 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 border-2 border-primary-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
              alt="Google" 
              className="h-5 w-5"
            />
            <span>اقرأ المزيد على جوجل</span>
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {testimonial.verified && (
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  ✓ تقييم موثق
                </div>
              )}
              
              <Quote className="h-8 w-8 text-primary-300 mb-4" />
              
              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.comment}"</p>
              
              <div className="flex items-center space-x-4 space-x-reverse">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.grade}</p>
                </div>
                <div className="flex space-x-1 space-x-reverse">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">هل أنت من عملائنا؟ شاركنا تجربتك!</p>
          <motion.a
            href="https://maps.app.goo.gl/WbyjMd3bBgwfDjEK8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2 space-x-reverse"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Star className="h-5 w-5" />
            <span>قيمنا على جوجل</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;