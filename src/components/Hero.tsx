import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Star } from 'lucide-react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // صور تعليمية حقيقية - طلاب يدرسون، مدرسين، فصول دراسية
  const heroImages = [
    'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // طلاب يدرسون
    'https://images.pexels.com/photos/8471838/pexels-photo-8471838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // مدرس يساعد طالب
    'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // طلاب في الفصل
    'https://images.pexels.com/photos/8471822/pexels-photo-8471822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // فصل دراسي
    'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // مجموعة طلاب
    'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // طلاب يكتبون
    'https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // طلاب مع كتب
    'https://images.pexels.com/photos/5212651/pexels-photo-5212651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // طالب يدرس
    'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // طلاب في المكتبة
    'https://images.pexels.com/photos/8471850/pexels-photo-8471850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  // طلاب يناقشون
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Users, number: '500+', label: 'طالب وطالبة' },
    { icon: BookOpen, number: '15+', label: 'مادة دراسية' },
    { icon: Award, number: '98%', label: 'نسبة النجاح' },
    { icon: Star, number: '5', label: 'تقييم الطلاب' }
  ];

  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('student-registration');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById('appointment-booking');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: index === currentImage ? 0.8 : 0,
              scale: index === currentImage ? 1 : 1.1
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <img
              src={image}
              alt={`طلاب أكاديمية كيان - أفضل سنتر تعليمي في مدينة بدر ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 gradient-bg opacity-75"></div>
      </div>

      {/* Floating Educational Elements - صور تعليمية حقيقية */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 opacity-20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <img
            src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
            alt="كتب دراسية"
            className="w-24 h-24 rounded-full object-cover shadow-lg"
          />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-16 opacity-20"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          <img
            src="https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
            alt="طالب يحل مسائل رياضيات"
            className="w-32 h-32 rounded-2xl object-cover shadow-lg"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-20 opacity-20"
          animate={{ 
            y: [0, -10, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        >
          <img
            src="https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
            alt="طالب يستخدم المجهر"
            className="w-28 h-28 rounded-xl object-cover shadow-lg"
          />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-10 opacity-15"
          animate={{ 
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 3 }}
        >
          <img
            src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
            alt="تجارب كيمياء"
            className="w-30 h-30 rounded-2xl object-cover shadow-lg"
          />
        </motion.div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 space-x-reverse z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-yellow-400 scale-125' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`عرض الصورة ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              مرحباً بكم في
              <span className="block text-yellow-300 mt-2">أكاديمية كيان</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 leading-relaxed opacity-90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              أفضل سنتر تعليمي في مدينة بدر - نقدم تعليماً متميزاً وشاملاً لجميع المراحل الدراسية مع أفضل المدرسين المتخصصين في بيئة تعليمية محفزة ومتطورة
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={scrollToRegistration}
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 pulse-glow shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                سجل الآن
              </motion.button>
              <motion.button
                onClick={scrollToAppointment}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                احجز موعد
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-15 backdrop-blur-lg rounded-2xl p-6 text-center text-white border border-white border-opacity-20"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(255,255,255,0.25)',
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold mb-2"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;