# تعليمات بناء ونشر تطبيق أكاديمية كيان

## 📱 تحويل الموقع إلى تطبيق PWA

تم تحويل الموقع إلى Progressive Web App (PWA) قابل للتثبيت على الأجهزة المحمولة وأجهزة الكمبيوتر.

## 🛠️ البناء والتطوير

### 1. تثبيت التبعيات
```bash
npm install
```

### 2. تشغيل الخادم المحلي
```bash
npm run dev
```

### 3. بناء المشروع للإنتاج
```bash
npm run build
```

### 4. بناء PWA مع الأيقونات
```bash
npm run build:pwa
```

## 🚀 النشر على Vercel

### الطريقة الأولى: من خلال GitHub

1. **رفع المشروع على GitHub**
```bash
git add .
git commit -m "PWA version ready"
git push origin main
```

2. **ربط Vercel بـ GitHub**
- اذهب إلى [vercel.com](https://vercel.com)
- سجل دخول بحساب GitHub
- اختر "New Project"
- اختر المستودع من GitHub
- اضغط "Deploy"

### الطريقة الثانية: Vercel CLI

```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# النشر
vercel --prod
```

## 📱 مميزات PWA المضافة

### 1. إمكانية التثبيت
- يمكن تثبيت التطبيق على الشاشة الرئيسية
- يعمل كتطبيق مستقل بدون متصفح
- أيقونة مخصصة على الجهاز

### 2. العمل بدون إنترنت
- تخزين مؤقت للصفحات المهمة
- إمكانية تصفح المحتوى المحفوظ
- تحديث تلقائي عند عودة الاتصال

### 3. الإشعارات
- إشعارات فورية للمواعيد
- تنبيهات للأخبار المهمة
- إشعارات حالة الاتصال

### 4. المشاركة
- مشاركة التطبيق مع الآخرين
- مشاركة صفحات محددة
- نسخ الروابط تلقائياً

## 📁 الملفات المضافة للـ PWA

```
public/
├── manifest.json          # ملف تكوين PWA
├── sw.js                 # Service Worker
└── pwa-config.json       # إعدادات إضافية

src/
├── components/
│   ├── InstallPrompt.tsx    # نافذة تثبيت التطبيق
│   └── PWAFeatures.tsx     # مميزات PWA
├── hooks/
│   └── usePWA.ts           # Hook للتعامل مع PWA
└── utils/
    └── pwa.ts              # أدوات PWA
```

## 🔧 إعدادات Vercel

### متغيرات البيئة (اختيارية)
```env
VITE_APP_NAME=أكاديمية كيان
VITE_CONTACT_PHONE=+201144108195
VITE_PWA_ENABLED=true
```

### ملف vercel.json
```json
{
  "buildCommand": "npm run build:pwa",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/sw.js",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        },
        {
          "key": "Service-Worker-Allowed",
          "value": "/"
        }
      ]
    },
    {
      "source": "/manifest.json",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/manifest+json"
        }
      ]
    }
  ]
}
```

## 📲 تثبيت التطبيق

### على Android:
1. افتح الموقع في Chrome
2. اضغط على "إضافة إلى الشاشة الرئيسية"
3. أو استخدم زر التثبيت في التطبيق

### على iOS:
1. افتح الموقع في Safari
2. اضغط على زر المشاركة
3. اختر "إضافة إلى الشاشة الرئيسية"

### على الكمبيوتر:
1. افتح الموقع في Chrome/Edge
2. اضغط على أيقونة التثبيت في شريط العنوان
3. أو استخدم زر التثبيت في التطبيق

## 🔍 اختبار PWA

### أدوات الاختبار:
1. **Chrome DevTools**
   - Application > Manifest
   - Application > Service Workers
   - Lighthouse > PWA Audit

2. **PWA Builder**
   - [pwabuilder.com](https://pwabuilder.com)
   - اختبار شامل للـ PWA

3. **Web App Manifest Validator**
   - التحقق من صحة ملف Manifest

## 📊 مراقبة الأداء

### مؤشرات مهمة:
- **First Contentful Paint (FCP)**
- **Largest Contentful Paint (LCP)**
- **Time to Interactive (TTI)**
- **Cumulative Layout Shift (CLS)**

### أدوات المراقبة:
- Google Analytics
- Vercel Analytics
- Web Vitals

## 🔄 التحديثات

### تحديث تلقائي:
- Service Worker يتحقق من التحديثات
- تحديث المحتوى في الخلفية
- إشعار المستخدم بالتحديثات الجديدة

### تحديث يدوي:
```javascript
// في المتصفح
navigator.serviceWorker.getRegistration().then(reg => {
  reg.update();
});
```

## 🛡️ الأمان

### HTTPS مطلوب:
- PWA يتطلب HTTPS للعمل
- Vercel يوفر HTTPS تلقائياً
- شهادات SSL مجانية

### Content Security Policy:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline'; 
               style-src 'self' 'unsafe-inline' fonts.googleapis.com;
               font-src fonts.gstatic.com;">
```

## 📈 تحسين الأداء

### تحسينات مطبقة:
- تقسيم الكود (Code Splitting)
- تحميل كسول للصور
- ضغط الملفات
- تخزين مؤقت ذكي

### نصائح إضافية:
- استخدم WebP للصور
- قلل من حجم JavaScript
- استخدم CDN للموارد الخارجية

## 🎯 الخطوات التالية

### مميزات مستقبلية:
1. **إشعارات Push متقدمة**
2. **مزامنة البيانات في الخلفية**
3. **دعم الوضع المظلم**
4. **تحديثات فورية**
5. **تكامل مع التقويم**

### تطوير التطبيق:
1. **إضافة قاعدة بيانات حقيقية**
2. **نظام دفع إلكتروني**
3. **تطبيق موبايل أصلي**
4. **لوحة تحكم متقدمة**

---

## 📞 الدعم الفني

للحصول على الدعم الفني أو إضافة مميزات جديدة:

**مؤسسة رواد الرقمية**
📞 0541430116

---

© 2024 أكاديمية كيان - جميع الحقوق محفوظة