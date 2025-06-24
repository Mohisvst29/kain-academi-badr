import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, BookOpen, GraduationCap, Send, CheckCircle } from 'lucide-react';

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    grade: '',
    class: '',
    gender: '',
    studentPhone: '',
    parentPhone: '',
    subject: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const grades = [
    'المرحلة الابتدائية',
    'المرحلة الإعدادية', 
    'المرحلة الثانوية'
  ];

  const subjects = [
    'الرياضيات',
    'العلوم',
    'اللغة العربية',
    'اللغة الإنجليزية',
    'الفيزياء',
    'الكيمياء',
    'الأحياء',
    'التاريخ',
    'الجغرافيا'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `تسجيل طالب جديد في أكاديمية كيان:
اسم الطالب: ${formData.studentName}
المرحلة الدراسية: ${formData.grade}
الصف: ${formData.class}
النوع: ${formData.gender}
رقم هاتف الطالب: ${formData.studentPhone || 'غير محدد'}
رقم هاتف ولي الأمر: ${formData.parentPhone}
المادة المطلوبة: ${formData.subject}`;

    const whatsappUrl = `https://wa.me/201144108195?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    setFormData({
      studentName: '',
      grade: '',
      class: '',
      gender: '',
      studentPhone: '',
      parentPhone: '',
      subject: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="student-registration" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Educational Elements - صور تعليمية حقيقية */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 opacity-10"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <img
            src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
            alt="طلاب يدرسون"
            className="w-32 h-32 rounded-full object-cover"
          />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-16 opacity-10"
          animate={{ 
            x: [0, 15, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        >
          <img
            src="https://images.pexels.com/photos/8471838/pexels-photo-8471838.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
            alt="مدرس يساعد طالب"
            className="w-40 h-40 rounded-2xl object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-10 opacity-10"
          animate={{ 
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 4 }}
        >
          <img
            src="https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
            alt="طالب يحل رياضيات"
            className="w-28 h-28 rounded-xl object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute top-16 left-1/3 opacity-8"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 6 }}
        >
          <img
            src="https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
            alt="طالب مع المجهر"
            className="w-24 h-24 rounded-full object-cover"
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
          <h2 className="text-4xl font-bold gradient-text mb-4">تسجيل الطلاب</h2>
          <p className="text-xl text-gray-600">انضم إلى أكاديمية كيان وابدأ رحلتك التعليمية المتميزة</p>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-2">تم التسجيل بنجاح!</h3>
              <p className="text-gray-600 mb-4">
                تم إرسال بياناتك بنجاح. سيتم التواصل معك قريباً لتأكيد التسجيل وتحديد المواعيد المناسبة.
              </p>
              <div className="text-sm text-gray-500">
                سيتم إغلاق هذه النافذة تلقائياً...
              </div>
            </motion.div>
          </motion.div>
        )}

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative Elements - صور تعليمية */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <img
                src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
                alt="كتب دراسية"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="absolute bottom-0 left-0 w-28 h-28 opacity-5">
              <img
                src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
                alt="تجارب كيمياء"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Student Name */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 space-x-reverse text-gray-700 font-medium">
                    <User className="h-5 w-5 text-primary-500" />
                    <span>اسم الطالب *</span>
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="أدخل اسم الطالب"
                  />
                </div>

                {/* Grade */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 space-x-reverse text-gray-700 font-medium">
                    <GraduationCap className="h-5 w-5 text-primary-500" />
                    <span>المرحلة الدراسية *</span>
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  >
                    <option value="">اختر المرحلة الدراسية</option>
                    {grades.map((grade) => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </div>

                {/* Class */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 space-x-reverse text-gray-700 font-medium">
                    <BookOpen className="h-5 w-5 text-primary-500" />
                    <span>الصف *</span>
                  </label>
                  <input
                    type="text"
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="مثال: الأول الثانوي"
                  />
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium">النوع *</label>
                  <div className="flex space-x-4 space-x-reverse pt-2">
                    <label className="flex items-center space-x-2 space-x-reverse">
                      <input
                        type="radio"
                        name="gender"
                        value="ذكر"
                        checked={formData.gender === 'ذكر'}
                        onChange={handleChange}
                        className="text-primary-500"
                        required
                      />
                      <span>ذكر</span>
                    </label>
                    <label className="flex items-center space-x-2 space-x-reverse">
                      <input
                        type="radio"
                        name="gender"
                        value="أنثى"
                        checked={formData.gender === 'أنثى'}
                        onChange={handleChange}
                        className="text-primary-500"
                        required
                      />
                      <span>أنثى</span>
                    </label>
                  </div>
                </div>

                {/* Student Phone */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 space-x-reverse text-gray-700 font-medium">
                    <Phone className="h-5 w-5 text-primary-500" />
                    <span>رقم هاتف الطالب</span>
                  </label>
                  <input
                    type="tel"
                    name="studentPhone"
                    value={formData.studentPhone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="01xxxxxxxxx"
                  />
                </div>

                {/* Parent Phone */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 space-x-reverse text-gray-700 font-medium">
                    <Phone className="h-5 w-5 text-primary-500" />
                    <span>رقم هاتف ولي الأمر *</span>
                  </label>
                  <input
                    type="tel"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="01xxxxxxxxx"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 space-x-reverse text-gray-700 font-medium">
                  <BookOpen className="h-5 w-5 text-primary-500" />
                  <span>المادة المطلوبة *</span>
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                >
                  <option value="">اختر المادة</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="h-5 w-5" />
                <span>تسجيل الطالب</span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentRegistration;