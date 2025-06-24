const fs = require('fs');
const path = require('path');

// إنشاء أيقونات بأحجام مختلفة للـ PWA
const iconSizes = [48, 72, 96, 144, 192, 256, 384, 512];

console.log('🎨 إنشاء أيقونات PWA...');

// في هذا المثال، نستخدم الشعار الموجود
// في التطبيق الحقيقي، يمكنك استخدام مكتبة لتغيير حجم الصور
const sourceIcon = path.join(__dirname, '../public/logo kian.png');
const distDir = path.join(__dirname, '../dist');

if (fs.existsSync(sourceIcon)) {
  console.log('✅ تم العثور على الشعار الأساسي');
  
  // نسخ الشعار إلى مجلد التوزيع
  if (fs.existsSync(distDir)) {
    fs.copyFileSync(sourceIcon, path.join(distDir, 'logo kian.png'));
    console.log('✅ تم نسخ الشعار إلى مجلد التوزيع');
  }
} else {
  console.log('❌ لم يتم العثور على الشعار الأساسي');
}

// إنشاء ملف تكوين إضافي للـ PWA
const pwaConfig = {
  name: 'أكاديمية كيان',
  version: '1.0.0',
  description: 'أفضل سنتر تعليمي في مدينة بدر',
  author: 'مؤسسة رواد الرقمية',
  contact: '+201144108195',
  website: 'https://kayan-academy.vercel.app',
  features: [
    'تسجيل الطلاب',
    'حجز المواعيد',
    'معلومات المدرسين',
    'التواصل المباشر',
    'لوحة تحكم إدارية'
  ],
  lastUpdated: new Date().toISOString()
};

fs.writeFileSync(
  path.join(__dirname, '../public/pwa-config.json'),
  JSON.stringify(pwaConfig, null, 2)
);

console.log('✅ تم إنشاء ملف تكوين PWA');
console.log('🚀 PWA جاهز للنشر!');