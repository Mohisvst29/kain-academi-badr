import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Share2, 
  Bell, 
  Wifi, 
  WifiOff, 
  Download, 
  Smartphone,
  RefreshCw
} from 'lucide-react';
import { PWAManager } from '../utils/pwa';

const PWAFeatures: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // إعداد مراقبة الشبكة
    PWAManager.setupNetworkMonitoring();
    
    // مراقبة حالة الاتصال
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // التحقق من حالة التثبيت
    setIsInstalled(PWAManager.isInstalled());

    // التحقق من إذن الإشعارات
    if ('Notification' in window) {
      setNotificationsEnabled(Notification.permission === 'granted');
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleShare = async () => {
    await PWAManager.shareContent({
      title: 'أكاديمية كيان',
      text: 'أفضل سنتر تعليمي في مدينة بدر',
      url: window.location.href
    });
  };

  const handleNotificationRequest = async () => {
    const granted = await PWAManager.requestNotificationPermission();
    setNotificationsEnabled(granted);
    
    if (granted) {
      PWAManager.showNotification('تم تفعيل الإشعارات!', {
        body: 'ستصلك إشعارات بآخر الأخبار والمواعيد المهمة'
      });
    }
  };

  const handleUpdate = async () => {
    await PWAManager.updateApp();
    PWAManager.showNotification('جاري البحث عن تحديثات...', {
      body: 'سيتم إعادة تحميل التطبيق إذا توفر تحديث جديد'
    });
  };

  if (!isInstalled) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-4 right-4 z-40"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
        <div className="flex items-center space-x-4 space-x-reverse">
          {/* حالة الاتصال */}
          <div className="flex items-center space-x-2 space-x-reverse">
            {isOnline ? (
              <Wifi className="h-5 w-5 text-green-500" />
            ) : (
              <WifiOff className="h-5 w-5 text-red-500" />
            )}
            <span className="text-xs text-gray-600">
              {isOnline ? 'متصل' : 'غير متصل'}
            </span>
          </div>

          {/* زر المشاركة */}
          <button
            onClick={handleShare}
            className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
            title="مشاركة التطبيق"
          >
            <Share2 className="h-4 w-4" />
          </button>

          {/* زر الإشعارات */}
          <button
            onClick={handleNotificationRequest}
            className={`p-2 rounded-lg transition-colors ${
              notificationsEnabled 
                ? 'text-green-500 hover:bg-green-50' 
                : 'text-gray-400 hover:bg-gray-50'
            }`}
            title={notificationsEnabled ? 'الإشعارات مفعلة' : 'تفعيل الإشعارات'}
          >
            <Bell className="h-4 w-4" />
          </button>

          {/* زر التحديث */}
          <button
            onClick={handleUpdate}
            className="p-2 text-purple-500 hover:bg-purple-50 rounded-lg transition-colors"
            title="البحث عن تحديثات"
          >
            <RefreshCw className="h-4 w-4" />
          </button>

          {/* مؤشر التطبيق المثبت */}
          <div className="flex items-center space-x-1 space-x-reverse">
            <Smartphone className="h-4 w-4 text-primary-500" />
            <span className="text-xs text-primary-600 font-medium">مثبت</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PWAFeatures;