import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Atom, BookOpen, Globe, Microscope, FlaskConical, History, Map } from 'lucide-react';

const Subjects = () => {
  const subjects = [
    {
      icon: Calculator,
      name: 'الرياضيات',
      description: 'جبر، هندسة، حساب مثلثات مع أفضل مدرسين الرياضيات',
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      icon: Atom,
      name: 'الفيزياء',
      description: 'ميكانيكا، كهرباء، ضوء مع مدرسين متخصصين',
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      icon: FlaskConical,
      name: 'الكيمياء',
      description: 'عضوية، غير عضوية، تحليلية بأسلوب مبسط',
      color: 'from-green-500 to-green-600',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      icon: Microscope,
      name: 'الأحياء',
      description: 'نبات، حيوان، وراثة مع أحدث الوسائل التعليمية',
      color: 'from-red-500 to-red-600',
      image: 'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      icon: BookOpen,
      name: 'اللغة العربية',
      description: 'نحو، صرف، أدب، بلاغة مع أفضل المدرسين',
      color: 'from-yellow-500 to-yellow-600',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      icon: Globe,
      name: 'اللغة الإنجليزية',
      description: 'قواعد، محادثة، كتابة مع مدرسين متخصصين',
      color: 'from-indigo-500 to-indigo-600',
      image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      icon: History,
      name: 'التاريخ',
      description: 'تاريخ مصر والعالم بطريقة شيقة وممتعة',
      color: 'from-orange-500 to-orange-600',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      icon: Map,
      name: 'الجغرافيا',
      description: 'طبيعية، بشرية، اقتصادية مع الخرائط والوسائل',
      color: 'from-teal-500 to-teal-600',
      image: 'https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Educational Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-16 left-16 opacity-5"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          <img
            src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
            alt="كتب"
            className="w-32 h-32 rounded-full object-cover"
          />
        </motion.div>
        
        <motion.div
          className="absolute top-32 right-20 opacity-5"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 3 }}
        >
          <img
            src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
            alt="علوم"
            className="w-28 h-28 rounded-2xl object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-24 right-12 opacity-5"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -15, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 5 }}
        >
          <img
            src="https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
            alt="رياضيات"
            className="w-36 h-36 rounded-xl object-cover"
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
          <h2 className="text-4xl font-bold gradient-text mb-4">المواد الدراسية</h2>
          <p className="text-xl text-gray-600">نقدم تدريساً متميزاً في جميع المواد الدراسية مع أفضل المدرسين المتخصصين في مدينة بدر</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Subject Image Background */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <img
                  src={subject.image}
                  alt={subject.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${subject.color} mb-4`}>
                  <subject.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{subject.name}</h3>
                <p className="text-gray-600 text-sm">{subject.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;