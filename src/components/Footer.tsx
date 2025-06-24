import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Facebook, MessageCircle, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <img 
                src="/logo kian.png" 
                alt="أكاديمية كيان" 
                className="h-14 w-14 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <h3 className="text-2xl font-bold">أكاديمية كيان</h3>
                <p className="text-gray-400">مركز تعليمي متميز</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              نحن نقدم تعليماً متميزاً وشاملاً لجميع المراحل الدراسية في بيئة تعليمية محفزة ومتطورة
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-5 w-5 text-primary-400" />
                <span>+201144108195</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span>5P63+VJP، مدينة بدر، بدر، 4953201، مصر</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="h-5 w-5 text-primary-400" />
                <span>info@kayan-academy.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">الصفحة الرئيسية</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">من نحن</a></li>
              <li><a href="/teachers" className="text-gray-400 hover:text-white transition-colors">المدرسين</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">اتصل بنا</a></li>
              <li><a href="#student-registration" className="text-gray-400 hover:text-white transition-colors">تسجيل الطلاب</a></li>
              <li><a href="#appointment-booking" className="text-gray-400 hover:text-white transition-colors">احجز موعد</a></li>
            </ul>
          </motion.div>

          {/* Social Media & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">تابعنا على</h4>
            <div className="flex space-x-4 space-x-reverse mb-6">
              <a 
                href="https://www.facebook.com/29kian.academy" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/201144108195" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
            <div>
              <div className="flex items-center space-x-2 space-x-reverse mb-2">
                <Clock className="h-5 w-5 text-primary-400" />
                <h5 className="font-medium">ساعات العمل</h5>
              </div>
              <p className="text-gray-400 text-sm">السبت - الخميس: 9:00 ص - 9:00 م</p>
              <p className="text-gray-400 text-sm">الجمعة: مغلق</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-2">
            <p className="text-gray-400">
              © 2024 أكاديمية كيان - جميع الحقوق محفوظة
            </p>
            <div className="flex items-center justify-center space-x-2 space-x-reverse text-sm text-gray-500">
              <span>صُمم بواسطة</span>
              <a 
                href="tel:0541430116" 
                className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
              >
                مؤسسة رواد الرقمية - 0541430116
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;