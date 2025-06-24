import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Clock, MapPin, Star } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'مناهج متطورة',
      description: 'نقدم أحدث المناهج التعليمية المطورة والمتوافقة مع معايير التعليم الحديثة لجميع المراحل الدراسية',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      icon: Users,
      title: 'أفضل مدرسين في بدر',
      description: 'فريق من أفضل المدرسين المتخصصين والمؤهلين في جميع المواد الدراسية مع خبرة واسعة في التدريس',
      image: 'https://images.pexels.com/photos/8471838/pexels-photo-8471838.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      icon: Award,
      title: 'نتائج متميزة',
      description: 'نسبة نجاح عالية وتفوق ملحوظ في النتائج الدراسية لطلابنا مع تحسن واضح في الدرجات',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      icon: Clock,
      title: 'مواعيد مرنة',
      description: 'مواعيد متنوعة ومرنة تناسب جميع الطلاب وأولياء الأمور من الصباح حتى المساء',
      image: 'https://images.pexels.com/photos/5212651/pexels-photo-5212651.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      icon: MapPin,
      title: 'موقع متميز في مدينة بدر',
      description: 'موقع استراتيجي في قلب مدينة بدر يسهل الوصول إليه من جميع أنحاء المدينة والمناطق المجاورة',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      icon: Star,
      title: 'بيئة تعليمية محفزة',
      description: 'بيئة تعليمية محفزة ومجهزة بأحدث الوسائل التعليمية والتقنيات المتطورة لضمان أفضل تجربة تعليمية',
      image: 'https://images.pexels.com/photos/8471822/pexels-photo-8471822.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Educational Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 opacity-10"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <img
            src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
            alt="طلاب"
            className="w-40 h-40 rounded-full object-cover"
          />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-10 opacity-10"
          animate={{ 
            y: [0, 20, 0],
            x: [0, 15, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        >
          <img
            src="https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
            alt="فصل دراسي"
            className="w-36 h-36 rounded-2xl object-cover"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">لماذا أكاديمية كيان؟</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن أفضل سنتر تعليمي في مدينة بدر - نقدم تعليماً متميزاً يجمع بين الجودة والحداثة لضمان أفضل النتائج لطلابنا
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Feature Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mb-6 mx-auto">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;