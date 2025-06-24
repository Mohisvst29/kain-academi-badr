import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, BookOpen, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'رؤيتنا',
      description: 'أن نكون المركز التعليمي الرائد في مدينة بدر والمناطق المحيطة، نقدم تعليماً متميزاً يساهم في بناء جيل واعٍ ومتفوق.'
    },
    {
      icon: Eye,
      title: 'رسالتنا',
      description: 'نحن ملتزمون بتقديم تعليم عالي الجودة من خلال أساليب تدريس حديثة ومتطورة، في بيئة تعليمية محفزة تساعد الطلاب على تحقيق أقصى إمكاناتهم.'
    },
    {
      icon: Heart,
      title: 'قيمنا',
      description: 'التميز في التعليم، الالتزام بالجودة، احترام الطلاب وأولياء الأمور، والسعي المستمر للتطوير والابتكار في أساليب التدريس.'
    }
  ];

  const stats = [
    { number: '500+', label: 'طالب وطالبة', icon: Users },
    { number: '15+', label: 'مادة دراسية', icon: BookOpen },
    { number: '98%', label: 'نسبة النجاح', icon: Award },
    { number: '5', label: 'سنوات خبرة', icon: Target }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-500 to-secondary-500 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="من نحن - أكاديمية كيان أفضل سنتر تعليمي في مدينة بدر"
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
            من نحن
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            أكاديمية كيان هي مركز تعليمي متميز يقع في قلب مدينة بدر، نقدم تعليماً عالي الجودة لجميع المراحل الدراسية
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

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">رؤيتنا ورسالتنا</h2>
            <p className="text-xl text-gray-600">نحن نؤمن بقوة التعليم في تشكيل مستقبل أفضل</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold gradient-text mb-6">قصتنا</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  تأسست أكاديمية كيان من رؤية واضحة: تقديم تعليم متميز يجمع بين الأساليب التقليدية والحديثة في التدريس. 
                  منذ انطلاقتنا، كان هدفنا هو خلق بيئة تعليمية محفزة تساعد كل طالب على اكتشاف قدراته وتنميتها.
                </p>
                <p>
                  نحن نفخر بفريقنا من المدرسين المتخصصين والمؤهلين، الذين يتمتعون بخبرة واسعة في مجال التعليم. 
                  كما نحرص على استخدام أحدث الوسائل التعليمية والتقنيات المتطورة لضمان وصول المعلومة بأفضل شكل ممكن.
                </p>
                <p>
                  موقعنا المتميز في مدينة بدر يجعلنا في متناول الطلاب من جميع أنحاء المنطقة، ونحن ملتزمون بتقديم خدمة تعليمية 
                  تفوق توقعات الطلاب وأولياء الأمور.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                alt="طلاب يدرسون في أكاديمية كيان"
                className="rounded-2xl shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/8471822/pexels-photo-8471822.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                alt="فصل دراسي في أكاديمية كيان"
                className="rounded-2xl shadow-lg mt-8"
              />
              <img
                src="https://images.pexels.com/photos/8471838/pexels-photo-8471838.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                alt="مدرس يساعد طالب في أكاديمية كيان"
                className="rounded-2xl shadow-lg -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                alt="مجموعة دراسية في أكاديمية كيان"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;