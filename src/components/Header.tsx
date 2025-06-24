import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'الصفحة الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'المدرسين', path: '/teachers' },
    { name: 'اتصل بنا', path: '/contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 space-x-reverse"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/logo kian.png" 
              alt="أكاديمية كيان - أفضل سنتر تعليمي في مدينة بدر" 
              className="h-16 w-16 object-contain"
              onError={(e) => {
                console.log('Logo failed to load');
                e.currentTarget.style.display = 'none';
              }}
            />
            <div>
              <h1 className="text-2xl font-bold gradient-text">أكاديمية كيان</h1>
              <p className="text-sm text-gray-600">مركز تعليمي متميز</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-primary-500 ${
                  location.pathname === item.path 
                    ? 'text-primary-500 border-b-2 border-primary-500 pb-1' 
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6 space-x-reverse">
            <div className="flex items-center space-x-2 space-x-reverse text-primary-600">
              <Phone className="h-4 w-4" />
              <span className="font-medium">+201144108195</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse text-primary-600">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">مدينة بدر</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden py-4 border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block font-medium transition-colors hover:text-primary-500 ${
                    location.pathname === item.path ? 'text-primary-500' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t">
                <div className="flex items-center space-x-2 space-x-reverse text-primary-600">
                  <Phone className="h-4 w-4" />
                  <span>+201144108195</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse text-primary-600">
                  <MapPin className="h-4 w-4" />
                  <span>مدينة بدر</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;