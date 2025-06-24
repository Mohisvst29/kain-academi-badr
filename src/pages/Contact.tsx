import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock, Facebook, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `مرحباً، أريد التواصل معكم:
الاسم: ${formData.name}
البريد الإلكتروني: ${formData.email}
الهاتف: ${formData.phone}
الموضوع: ${formData.subject}
الرسالة: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/201144108195?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    alert('تم إرسال رسالتك بنجاح! سيتم التواصل معك قريباً');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'رقم الهاتف',
      details: '+201144108195',
      link: 'tel:+201144108195'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      details: '5P63+VJP، مدينة بدر، بدر، 4953201، مصر',
      link: 'https://maps.app.goo.gl/Nwbd2C5oE1nyiQWd8'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: 'info@kayan-academy.com',
      link: 'mailto:info@kayan-academy.com'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      details: 'السبت - الخميس: 9:00 ص - 9:00 م',
      link: null
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-500 to-secondary-500 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="اتصل بأكاديمية كيان - أفضل سنتر تعليمي في مدينة بدر"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            اتصل بنا
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في رحلتكم التعليمية
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-500 transition-colors"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.details}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold gradient-text mb-6">أرسل لنا رسالة</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">الاسم *</label>
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
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">رقم الهاتف *</label>
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
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">الموضوع *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    >
                      <option value="">اختر الموضوع</option>
                      <option value="استفسار عام">استفسار عام</option>
                      <option value="تسجيل طالب">تسجيل طالب</option>
                      <option value="حجز موعد">حجز موعد</option>
                      <option value="شكوى أو اقتراح">شكوى أو اقتراح</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">الرسالة *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="h-5 w-5" />
                    <span>إرسال الرسالة</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
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

              {/* Social Media */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">تابعنا على</h3>
                <div className="flex space-x-4 space-x-reverse">
                  <a
                    href="https://www.facebook.com/29kian.academy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-4 rounded-full hover:bg-blue-700 transition-colors group"
                  >
                    <Facebook className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="https://wa.me/201144108195"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 p-4 rounded-full hover:bg-green-700 transition-colors"
                  >
                    <Phone className="h-6 w-6 text-white" />
                  </a>
                </div>
                <p className="text-gray-600 mt-4">
                  تابعنا على صفحتنا على فيسبوك للحصول على آخر الأخبار والتحديثات
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;