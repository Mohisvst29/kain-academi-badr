import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Star, Users, Send, CheckCircle, Phone, User } from 'lucide-react';

const Teachers = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    phone: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const teachers = [
    {
      name: 'الأستاذة نجوى عزام',
      subject: 'اللغة العربية',
      image: '/32.png',
      qualifications: [
        'ليسانس آداب - قسم اللغة العربية',
        'دبلوم تربوي',
        'دورات متخصصة في طرق التدريس الحديثة'
      ],
      specialties: ['النحو والصرف', 'الأدب والبلاغة', 'التعبير والإنشاء'],
      rating: 5,
      description: 'مدرسة متميزة في اللغة العربية مع خبرة واسعة في تدريس جميع المراحل الدراسية'
    },
    {
      name: 'مدام / ابتسام عامر',
      subject: 'اللغة الفرنسية',
      image: '/image copy copy.png',
      qualifications: [
        'ليسانس آداب فرنسي',
        'دبلوم تربوي',
        'شهادات متخصصة في تعليم اللغة الفرنسية'
      ],
      specialties: ['القواعد الفرنسية', 'المحادثة', 'الأدب الفرنسي'],
      rating: 5,
      description: 'خبيرة في تعليم اللغة الفرنسية بطرق تفاعلية حديثة'
    },
    {
      name: 'مس / عفاف',
      subject: 'الرياضيات',
      image: '/4.png',
      qualifications: [
        'بكالوريوس رياضيات',
        'دبلوم تربوي',
        'دورات في طرق تدريس الرياضيات الحديثة'
      ],
      specialties: ['الجبر', 'الهندسة', 'حساب المثلثات'],
      rating: 5,
      description: 'متخصصة في تبسيط الرياضيات وجعلها ممتعة للطلاب'
    },
    {
      name: 'الأستاذ / هاني علي',
      subject: 'الدراسات الاجتماعية',
      image: '/5.png',
      qualifications: [
        'ليسانس تاريخ وجغرافيا',
        'دبلوم تربوي',
        'ماجستير في التاريخ الحديث'
      ],
      specialties: ['التاريخ المصري', 'الجغرافيا الطبيعية', 'التربية الوطنية'],
      rating: 5,
      description: 'خبير في ربط التاريخ والجغرافيا بالواقع المعاصر'
    },
    {
      name: 'مدام / نرياد الزهرا',
      subject: 'اللغة الفرنسية',
      image: '/6.png',
      qualifications: [
        'ليسانس آداب فرنسي',
        'دبلوم تربوي',
        'شهادة DELF في اللغة الفرنسية'
      ],
      specialties: ['النطق الصحيح', 'القواعد', 'التعبير الكتابي'],
      rating: 5,
      description: 'متخصصة في تعليم اللغة الفرنسية للمبتدئين والمتقدمين'
    }
  ];

  const stats = [
    { icon: Users, number: '15+', label: 'مدرس متخصص' },
    { icon: BookOpen, number: '12+', label: 'مادة دراسية' },
    { icon: Star, number: '4.9', label: 'تقييم المدرسين' },
    { icon: Award, number: '98%', label: 'نسبة رضا الطلاب' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `طلب انضمام كمدرس في أكاديمية كيان:
الاسم: ${formData.name}
التخصص: ${formData.subject}
رقم التواصل: ${formData.phone}`;

    const whatsappUrl = `https://wa.me/201144108195?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    
    setFormData({
      name: '',
      subject: '',
      phone: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-500 to-secondary-500 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8471838/pexels-photo-8471838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="مدرسو أكاديمية كيان - أفضل سنتر تعليمي في مدينة بدر"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        {/* Background Educational Elements - حركة أقل */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 opacity-10"
            animate={{ 
              y: [0, -10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <img
              src="https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
              alt="طالب يحل رياضيات"
              className="w-24 h-24 rounded-full object-cover"
            />
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 right-16 opacity-10"
            animate={{ 
              y: [0, 10, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          >
            <img
              src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
              alt="طلاب يدرسون"
              className="w-28 h-28 rounded-2xl object-cover"
            />
          </motion.div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            فريق المدرسين
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            تعرف على أفضل المدرسين المتخصصين في أكاديمية كيان - نخبة من الخبراء المؤهلين لضمان أفضل تجربة تعليمية
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Educational Elements - حركة أقل */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-16 right-10 opacity-5"
            animate={{ 
              y: [0, -15, 0]
            }}
            transition={{ duration: 12, repeat: Infinity }}
          >
            <img
              src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
              alt="كتب دراسية"
              className="w-32 h-32 rounded-full object-cover"
            />
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 left-10 opacity-5"
            animate={{ 
              x: [0, 10, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, delay: 3 }}
          >
            <img
              src="https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
              alt="طالب مع المجهر"
              className="w-28 h-28 rounded-2xl object-cover"
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
            <h2 className="text-4xl font-bold gradient-text mb-4">تعرف على مدرسينا</h2>
            <p className="text-xl text-gray-600">نخبة من أفضل المدرسين المتخصصين والمؤهلين في مدينة بدر</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Teacher Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={`${teacher.name} - مدرس ${teacher.subject} في أكاديمية كيان`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{teacher.name}</h3>
                    <p className="text-yellow-300 font-medium">{teacher.subject}</p>
                  </div>
                </div>

                {/* Teacher Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-1 space-x-reverse">
                      {[...Array(teacher.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{teacher.description}</p>

                  {/* Qualifications */}
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <GraduationCap className="h-4 w-4 ml-2 text-primary-500" />
                      المؤهلات
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {teacher.qualifications.map((qual, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary-500 ml-2">•</span>
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <Award className="h-4 w-4 ml-2 text-primary-500" />
                      التخصصات
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {teacher.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Teachers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold gradient-text mb-6">لماذا مدرسونا الأفضل؟</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">مؤهلات عالية</h3>
                    <p className="text-gray-600">جميع مدرسينا حاصلون على مؤهلات عالية ودرجات علمية متخصصة في مجالاتهم</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">خبرة متميزة</h3>
                    <p className="text-gray-600">خبرة واسعة في التدريس وفهم احتياجات الطلاب في مختلف المراحل</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">طرق تدريس حديثة</h3>
                    <p className="text-gray-600">استخدام أحدث طرق التدريس والتقنيات التعليمية لضمان وصول المعلومة بأفضل شكل</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">اهتمام شخصي</h3>
                    <p className="text-gray-600">متابعة فردية لكل طالب وتقديم الدعم اللازم لتحقيق أفضل النتائج</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/8471838/pexels-photo-8471838.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                alt="مدرس متميز في أكاديمية كيان"
                className="rounded-3xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teacher Registration Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Educational Elements - حركة أقل */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 right-10 opacity-8"
            animate={{ 
              y: [0, -8, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          >
            <img
              src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
              alt="طلاب يدرسون"
              className="w-24 h-24 rounded-full object-cover"
            />
          </motion.div>
          
          <motion.div
            className="absolute bottom-32 left-16 opacity-8"
            animate={{ 
              x: [0, 8, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          >
            <img
              src="https://images.pexels.com/photos/8471822/pexels-photo-8471822.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
              alt="فصل دراسي"
              className="w-28 h-28 rounded-2xl object-cover"
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
            <h2 className="text-4xl font-bold gradient-text mb-4">انضم لفريق المدرسين</h2>
            <p className="text-xl text-gray-600">هل تريد الانضمام لفريق أكاديمية كيان؟ نحن نبحث عن مدرسين متميزين</p>
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
                <h3 className="text-2xl font-bold text-gray-800 mb-2">تم إرسال طلبك بنجاح!</h3>
                <p className="text-gray-600">
                  سيتم التواصل معك قريباً لمناقشة إمكانية الانضمام لفريقنا
                </p>
              </motion.div>
            </motion.div>
          )}

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold gradient-text mb-6 text-center">طلب انضمام كمدرس</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 space-x-reverse text-gray-700 font-medium">
                    <BookOpen className="h-5 w-5 text-primary-500" />
                    <span>التخصص *</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  >
                    <option value="">اختر التخصص</option>
                    <option value="الرياضيات">الرياضيات</option>
                    <option value="العلوم">العلوم</option>
                    <option value="اللغة العربية">اللغة العربية</option>
                    <option value="اللغة الإنجليزية">اللغة الإنجليزية</option>
                    <option value="اللغة الفرنسية">اللغة الفرنسية</option>
                    <option value="الفيزياء">الفيزياء</option>
                    <option value="الكيمياء">الكيمياء</option>
                    <option value="الأحياء">الأحياء</option>
                    <option value="التاريخ">التاريخ</option>
                    <option value="الجغرافيا">الجغرافيا</option>
                    <option value="الدراسات الاجتماعية">الدراسات الاجتماعية</option>
                    <option value="أخرى">أخرى</option>
                  </select>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 space-x-reverse text-gray-700 font-medium">
                    <Phone className="h-5 w-5 text-primary-500" />
                    <span>رقم التواصل *</span>
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

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="h-5 w-5" />
                  <span>إرسال طلب الانضمام</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Teachers;