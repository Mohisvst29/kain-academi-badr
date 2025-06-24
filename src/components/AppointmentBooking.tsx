import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, BookOpen, MapPin, CheckCircle } from 'lucide-react';

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    subject: '',
    notes: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const timeSlots = [
    '09:00 ص', '10:00 ص', '11:00 ص', '12:00 م',
    '01:00 م', '02:00 م', '03:00 م', '04:00 م',
    '05:00 م', '06:00 م', '07:00 م', '08:00 م'
  ];

  const subjects = [
    'الرياضيات', 'العلوم', 'اللغة العربية', 'اللغة الإنجليزية',
    'الفيزياء', 'الكيمياء', 'الأحياء', 'التاريخ', 'الجغرافيا'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `حجز موعد في أكاديمية كيان:
الاسم: ${formData.name}
رقم الهاتف: ${formData.phone}
التاريخ: ${formData.date}
الوقت: ${formData.time}
المادة: ${formData.subject || 'غير محدد'}
ملاحظات: ${formData.notes || 'لا توجد ملاحظات'}`;

    const whatsappUrl = `https://wa.me/201144108195?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      subject: '',
      notes: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="appointment-booking" className="py-20 bg-white relative overflow-hidden">
      {/* Background Educational Elements - صور تعليمية حقيقية */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-16 left-16 opacity-5"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          <img
            src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
            alt="طلاب في الفصل"
            className="w-40 h-40 rounded-full object-cover"
          />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-20 opacity-5"
          animate={{ 
            x: [0, 25, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        >
          <img
            src="https://images.pexels.com/photos/8471838/pexels-photo-8471838.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
            alt="مدرس يساعد طالب"
            className="w-36 h-36 rounded-2xl object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-10 opacity-5"
          animate={{ 
            rotate: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 5 }}
        >
          <img
            src="https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
            alt="طالب يحل رياضيات"
            className="w-32 h-32 rounded-xl object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute top-20 right-1/3 opacity-5"
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        >
          <img
            src="https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
            alt="طالب مع المجهر"
            className="w-28 h-28 rounded-full object-cover"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">احجز موعدك</h2>
          <p className="text-xl text-gray-600">احجز موعداً مناسباً لك في المركز</p>
        </motion.div>

        {/* Success Message */}
        {showSuccess && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-md mx-4 text-center shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">تم حجز الموعد بنجاح!</h3>
              <p className="text-gray-600">
                سيتم التأكيد معكم قريباً عبر الواتساب
              </p>
            </motion.div>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl relative overflow-hidden">
              {/* Decorative Image - صور تعليمية */}
              <div className="absolute top-0 left-0 w-24 h-24 opacity-10">
                <img
                  src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
                  alt="كتب دراسية"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6 relative z-10">معلومات الحجز</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Name */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 space-x-reverse text-gray-700 font-medium">
                    <User className="h-5 w-5 text-primary-500" />
                    <span>الاسم *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="أدخل اسمك"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 space-x-reverse text-gray-700 font-medium">
                    <Phone className="h-5 w-5 text-primary-500" />
                    <span>رقم الهاتف *</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="01xxxxxxxxx"
                  />
                </div>

                {/* Date and Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 space-x-reverse text-gray-700 font-medium">
                      <Calendar className="h-5 w-5 text-primary-500" />
                      <span>التاريخ *</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 space-x-reverse text-gray-700 font-medium">
                      <Clock className="h-5 w-5 text-primary-500" />
                      <span>الوقت *</span>
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    >
                      <option value="">اختر الوقت</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 space-x-reverse text-gray-700 font-medium">
                    <BookOpen className="h-5 w-5 text-primary-500" />
                    <span>المادة</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  >
                    <option value="">اختر المادة (اختياري)</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium">ملاحظات إضافية</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors resize-none"
                    placeholder="أي ملاحظات أو طلبات خاصة"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  تأكيد الحجز
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border relative overflow-hidden">
              {/* Decorative Image - صور تعليمية */}
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
                <img
                  src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
                  alt="طلاب أكاديمية كيان"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6 relative z-10">معلومات التواصل</h3>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Phone className="h-6 w-6 text-primary-500" />
                  <div>
                    <p className="font-medium">رقم الهاتف</p>
                    <p className="text-gray-600">+201144108195</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <MapPin className="h-6 w-6 text-primary-500" />
                  <div>
                    <p className="font-medium">العنوان</p>
                    <p className="text-gray-600">5P63+VJP، مدينة بدر، بدر، 4953201، مصر</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">موقعنا على الخريطة</h3>
              <div className="aspect-video rounded-xl overflow-hidden border-2 border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215.60136355641998!2d31.70411873621101!3d30.162226600000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457f9452f6b136d%3A0xbe668c18222ae6ff!2z2KPZg9in2K_ZitmF2YrYqSDZg9mK2KfZhiDYp9mE2KrYudmE2YrZhdmK2Kk!5e0!3m2!1sar!2ssa!4v1750744230272!5m2!1sar!2ssa"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع أكاديمية كيان - أفضل سنتر تعليمي في مدينة بدر"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/Nwbd2C5oE1nyiQWd8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary-500 hover:text-primary-600 font-medium"
              >
                عرض على خرائط جوجل ←
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBooking;