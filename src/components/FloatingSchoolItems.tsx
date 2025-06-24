import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calculator, Microscope, Palette, Globe, GraduationCap } from 'lucide-react';

const FloatingSchoolItems = () => {
  const schoolItems = [
    { icon: BookOpen, color: 'text-blue-500', size: 'h-8 w-8' },
    { icon: Calculator, color: 'text-green-500', size: 'h-6 w-6' },
    { icon: Microscope, color: 'text-purple-500', size: 'h-7 w-7' },
    { icon: Palette, color: 'text-pink-500', size: 'h-6 w-6' },
    { icon: GraduationCap, color: 'text-yellow-500', size: 'h-7 w-7' },
    { icon: Globe, color: 'text-indigo-500', size: 'h-8 w-8' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {schoolItems.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.color}`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.2
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight
            ],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 25 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        >
          <item.icon className={item.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingSchoolItems;