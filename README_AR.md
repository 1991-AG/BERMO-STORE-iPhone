# BERMO STORE — iPhone Native App

هذه النسخة هي غلاف Native باستخدام Capacitor.

## الفكرة
- تطبيق مستقل بأيقونة على iPhone.
- يفتح BERMO STORE داخل WebView الخاص بالتطبيق.
- لا يفتح Safari.
- `Code.gs` يظل Backend على Google Apps Script.
- لا نحتاج إلى إعادة كتابة منطق الاشتراكات والمبيعات الموجود في `index.html`.

## قبل التشغيل
1. افتح `capacitor.config.js`.
2. استبدل:
   `PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE`
   برابط Google Apps Script Web App المنشور الحالي.
3. لا تضع رابط `invoice`؛ استخدم رابط الـ Web App الرئيسي الذي يفتح صفحة تسجيل الدخول.

## على Windows
ثبّت Node.js LTS، ثم افتح CMD داخل مجلد المشروع:

```bat
npm install
npx cap add android
npx cap sync
```

يمكن اختبار نسخة Android على Windows.

## iPhone
ملفات iOS يمكن تجهيزها، لكن بناء وتوقيع تطبيق iPhone رسميًا يحتاج بيئة macOS/Xcode أو خدمة بناء سحابية متوافقة مع Apple.
بعد تجهيز حساب Apple والتوقيع، نستخدم:

```bat
npx cap add ios
npx cap sync ios
```

ثم يتم البناء والتوقيع على macOS/CI.

## مهم
لا تحذف مشروع Google Apps Script الحالي. هذا المشروع هو طبقة التطبيق فقط.
