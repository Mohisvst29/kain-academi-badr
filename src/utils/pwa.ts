// PWA Utilities لأكاديمية كيان
export class PWAManager {
  private static deferredPrompt: any = null;

  // تسجيل Service Worker
  static async registerServiceWorker(): Promise<void> {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker مسجل بنجاح:', registration);
        
        // التحقق من التحديثات
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // يوجد تحديث جديد
                this.showUpdateNotification();
              }
            });
          }
        });
      } catch (error) {
        console.error('فشل في تسجيل Service Worker:', error);
      }
    }
  }

  // إظهار إشعار التحديث
  private static showUpdateNotification(): void {
    if (confirm('يتوفر تحديث جديد للتطبيق. هل تريد إعادة التحميل؟')) {
      window.location.reload();
    }
  }

  // التعامل مع حدث تثبيت التطبيق
  static setupInstallPrompt(): void {
    window.addEventListener('beforeinstallprompt', (e) => {
      // منع إظهار النافذة التلقائية
      e.preventDefault();
      this.deferredPrompt = e;
      
      // إظهار زر التثبيت المخصص
      this.showInstallButton();
    });

    // التعامل مع تثبيت التطبيق
    window.addEventListener('appinstalled', () => {
      console.log('تم تثبيت التطبيق بنجاح');
      this.hideInstallButton();
      this.deferredPrompt = null;
    });
  }

  // إظهار زر التثبيت
  private static showInstallButton(): void {
    const installButton = document.getElementById('install-button');
    if (installButton) {
      installButton.style.display = 'block';
    }
  }

  // إخفاء زر التثبيت
  private static hideInstallButton(): void {
    const installButton = document.getElementById('install-button');
    if (installButton) {
      installButton.style.display = 'none';
    }
  }

  // تثبيت التطبيق
  static async installApp(): Promise<void> {
    if (this.deferredPrompt) {
      // إظهار نافذة التثبيت
      this.deferredPrompt.prompt();
      
      // انتظار اختيار المستخدم
      const { outcome } = await this.deferredPrompt.userChoice;
      console.log(`نتيجة التثبيت: ${outcome}`);
      
      this.deferredPrompt = null;
    }
  }

  // التحقق من إمكانية التثبيت
  static canInstall(): boolean {
    return this.deferredPrompt !== null;
  }

  // التحقق من كون التطبيق مثبت
  static isInstalled(): boolean {
    return window.matchMedia('(display-mode: standalone)').matches ||
           (window.navigator as any).standalone === true;
  }

  // طلب إذن الإشعارات
  static async requestNotificationPermission(): Promise<boolean> {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    }
    return false;
  }

  // إرسال إشعار محلي
  static showNotification(title: string, options?: NotificationOptions): void {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, {
        icon: '/logo kian.png',
        badge: '/logo kian.png',
        ...options
      });
    }
  }

  // التحقق من الاتصال بالإنترنت
  static isOnline(): boolean {
    return navigator.onLine;
  }

  // مراقبة حالة الاتصال
  static setupNetworkMonitoring(): void {
    window.addEventListener('online', () => {
      this.showNotification('تم استعادة الاتصال بالإنترنت', {
        body: 'يمكنك الآن استخدام جميع ميزات التطبيق'
      });
    });

    window.addEventListener('offline', () => {
      this.showNotification('انقطع الاتصال بالإنترنت', {
        body: 'بعض الميزات قد لا تعمل بشكل صحيح'
      });
    });
  }

  // تحديث التطبيق
  static async updateApp(): Promise<void> {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        registration.update();
      }
    }
  }

  // مشاركة المحتوى
  static async shareContent(data: ShareData): Promise<void> {
    if (navigator.share) {
      try {
        await navigator.share(data);
      } catch (error) {
        console.error('فشل في المشاركة:', error);
      }
    } else {
      // fallback للمتصفحات التي لا تدعم Web Share API
      this.fallbackShare(data);
    }
  }

  // مشاركة بديلة
  private static fallbackShare(data: ShareData): void {
    const url = data.url || window.location.href;
    const text = `${data.title}\n${data.text}\n${url}`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      alert('تم نسخ الرابط إلى الحافظة');
    } else {
      // fallback للمتصفحات القديمة
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('تم نسخ الرابط إلى الحافظة');
    }
  }
}