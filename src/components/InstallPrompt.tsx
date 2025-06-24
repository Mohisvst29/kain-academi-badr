import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Smartphone } from 'lucide-react';
import { PWAManager } from '../utils/pwa';

const InstallPrompt: React.FC = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // التحقق من إمكانية التثبيت
    const checkInstallability = () => {
      setIsInstalled(PWAManager.isInstalled());
      setShowPrompt(PWAManager.canInstall() && !PWAManager.isInstalled());
    };

    // إعداد مراقبة أحداث التثبيت
    PWAManager.setupInstallPrompt();
    
    // التحقق الأولي
    checkInstallability();

    // مراقبة تغييرات حالة التثبيت
    const interval = setInterval(checkInstallability, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleInstall = async () => {
    try {
      await PWAManager.installApp();
      setShowPrompt(false);
    } catch (error) {
      console.error('فشل في تثبيت التطبيق:', error);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // إخفاء النافذة لمدة يوم
    localStorage.setItem('installPromptDismissed', Date.now().toString());
  };

  // التحقق من إخفاء النافذة مسبقاً
  useEffect(() => {
    const dismissed = localStorage.getItem('installPromptDismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      const oneDayInMs = 24 * 60 * 60 * 1000;
      if (Date.now() - dismissedTime < oneDayInMs) {
        setShowPrompt(false);
        return;
      }
    }
  }, []);

  if (isInstalled || !showPrompt) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm"
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-primary-200 p-6 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-50"></div>
          
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-3 left-3 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative z-10">
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mb-4 mx-auto">
              <Smartphone className="h-8 w-8 text-white" />
            </div>

            {/* Content */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                ثبت تطبيق أكاديمية كيان
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                احصل على تجربة أفضل مع التطبيق المثبت على جهازك. وصول سريع، إشعارات فورية، وعمل بدون إنترنت!
              </p>
            </div>

            {/* Features */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>وصول سريع من الشاشة الرئيسية</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>إشعارات فورية للمواعيد والأخبار</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>عمل بدون إنترنت للصفحات المحفوظة</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-3 space-x-reverse">
              <motion.button
                onClick={handleInstall}
                className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 px-4 rounded-xl font-bold text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="h-4 w-4" />
                <span>تثبيت التطبيق</span>
              </motion.button>
              
              <button
                onClick={handleDismiss}
                className="px-4 py-3 text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium"
              >
                لاحقاً
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InstallPrompt;