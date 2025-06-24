import { useState, useEffect } from 'react';
import { PWAManager } from '../utils/pwa';

export const usePWA = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const [canInstall, setCanInstall] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  useEffect(() => {
    // تسجيل Service Worker
    PWAManager.registerServiceWorker();
    
    // إعداد مراقبة التثبيت
    PWAManager.setupInstallPrompt();
    
    // إعداد مراقبة الشبكة
    PWAManager.setupNetworkMonitoring();

    // التحقق من الحالات الأولية
    setIsInstalled(PWAManager.isInstalled());
    setCanInstall(PWAManager.canInstall());
    
    if ('Notification' in window) {
      setNotificationsEnabled(Notification.permission === 'granted');
    }

    // مراقبة حالة الاتصال
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // مراقبة تغييرات إمكانية التثبيت
    const checkInstallability = () => {
      setCanInstall(PWAManager.canInstall());
      setIsInstalled(PWAManager.isInstalled());
    };

    const interval = setInterval(checkInstallability, 1000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(interval);
    };
  }, []);

  const installApp = async () => {
    try {
      await PWAManager.installApp();
      setIsInstalled(true);
      setCanInstall(false);
    } catch (error) {
      console.error('فشل في تثبيت التطبيق:', error);
    }
  };

  const requestNotifications = async () => {
    const granted = await PWAManager.requestNotificationPermission();
    setNotificationsEnabled(granted);
    return granted;
  };

  const shareApp = async (data?: ShareData) => {
    const defaultData = {
      title: 'أكاديمية كيان',
      text: 'أفضل سنتر تعليمي في مدينة بدر',
      url: window.location.href
    };
    
    await PWAManager.shareContent(data || defaultData);
  };

  const showNotification = (title: string, options?: NotificationOptions) => {
    PWAManager.showNotification(title, options);
  };

  const updateApp = async () => {
    await PWAManager.updateApp();
  };

  return {
    isInstalled,
    canInstall,
    isOnline,
    notificationsEnabled,
    installApp,
    requestNotifications,
    shareApp,
    showNotification,
    updateApp
  };
};