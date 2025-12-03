# ToolHub - Quick Reference Card 
## بطاقة مرجعية سريعة

---

## 🚀 البدء السريع (60 ثانية)

```bash
# 1. تشغيل المشروع
pnpm dev

# 2. افتح المتصفح
http://localhost:5173

# 3. استمتع! 🎉
```

---

## 🎯 الأوامر الأساسية

| الأمر | الوصف |
|------|-------|
| `pnpm dev` | تشغيل محلي |
| `pnpm build` | بناء للإنتاج |
| `pnpm start` | تشغيل الإنتاج |
| `pnpm test` | اختبارات |
| `pnpm typecheck` | فحص TypeScript |

---

## 📁 المسارات الأساسية

```
client/
  ├── components/      # المكونات
  │   ├── Header.tsx
  │   ├── Footer.tsx
  │   ├── ToolCard.tsx
  │   ├── AdBanner.tsx
  │   └── tools/       # الأدوات
  ├── context/         # إدارة الحالة
  │   └── LanguageContext.tsx
  ├── lib/            # أدوات مساعدة
  │   └── i18n.ts     # الترجمات
  ├── pages/          # الصفحات
  │   └── Index.tsx   # الصفحة الرئيسية
  └── global.css      # الأنماط العامة
```

---

## ⚙️ الإعدادات الأساسية

### تغيير الألوان
```css
/* في client/global.css */
:root {
  --primary: 217.2 91.2% 59.8%;  /* اللون الأساسي */
  --secondary: 210 40% 96.1%;    /* اللون الثانوي */
}
```

### تغيير الخط
```typescript
// في tailwind.config.ts
fontFamily: {
  sans: ['Inter', 'system-ui'],
}
```

### إضافة لون جديد
```typescript
// في tailwind.config.ts
colors: {
  'custom': '#FF6B6B',
}
```

---

## 🌐 الترجمة والتعريب

### إضافة ترجمة جديدة
```typescript
// في client/lib/i18n.ts
en: {
  toolDescriptions: {
    newtool: {
      name: 'New Tool',
      description: 'Description here',
    }
  }
},
ar: {
  toolDescriptions: {
    newtool: {
      name: 'أداة جديدة',
      description: 'الوصف هنا',
    }
  }
}
```

### استخدام الترجمة
```typescript
const { t } = useLanguage();
<h1>{t('toolDescriptions.newtool.name')}</h1>
```

---

## 🎨 إضافة أداة جديدة (3 خطوات)

### Step 1: أنشئ المكون
```
client/components/tools/NewTool.tsx
```

### Step 2: أضف الترجمة
```typescript
// في i18n.ts
newtool: {
  name: 'New Tool',
  description: 'My tool'
}
```

### Step 3: سجّل الأداة
```typescript
// في pages/Index.tsx
import NewTool from '@/components/tools/NewTool';

{
  id: 'newtool',
  icon: '🎯',
  name: t('toolDescriptions.newtool.name'),
  description: t('toolDescriptions.newtool.description'),
  keywords: ['keyword1', 'keyword2'],
  component: <NewTool />,
},
```

---

## 🎬 الرسوم المتحركة (Framer Motion)

### مثال: تأثير عند التحويم
```tsx
import { motion } from 'framer-motion';

<motion.div
  whileHover={{ y: -8, scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  Content
</motion.div>
```

### مثال: ظهور متتالي
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map((item) => (...))}
</motion.div>
```

---

## 🌙 Dark Mode

### الفئات:
```tsx
className="bg-white dark:bg-slate-800"
className="text-slate-900 dark:text-white"
```

### اختبار Dark Mode:
```typescript
const { theme } = useLanguage();
// theme = 'light' or 'dark'
```

---

## 📱 Responsive Design

### Breakpoints:
```
Mobile:  < 640px    (sm)
Tablet:  640-1024   (md, lg)
Desktop: > 1024px   (xl)
```

### مثال:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```

---

## 🔍 البحث والمفضلة

### استخدام البحث:
```typescript
const { searchQuery, setSearchQuery } = useLanguage();

<input
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>
```

### استخدام المفضلة:
```typescript
const { favorites, toggleFavorite } = useLanguage();

<button onClick={() => toggleFavorite('toolid')}>
  ⭐
</button>

{favorites.has('toolid') && <span>Favorited!</span>}
```

---

## 🎨 الألوان المتاحة

```
الأزرق:     text-blue-500
البنفسجي:   text-purple-600
الأخضر:    text-green-500
الأحمر:     text-red-500
الوردي:    text-pink-500
السماوي:   text-cyan-500
الأصفر:    text-yellow-500
الرمادي:   text-slate-600
```

---

## 📱 Icons (Lucide React)

### استخدام الأيقونات:
```tsx
import { Icon } from 'lucide-react';

<Icon className="w-5 h-5" />
```

### أيقونات مشهورة:
```
Search, Copy, CheckCircle2, AlertCircle
Star, Heart, Settings, Download, Upload
Moon, Sun, Menu, X, ArrowRight, RefreshCw
```

---

## 📊 Meta Tags (SEO)

### تحديث Meta Tags:
```html
<!-- في index.html -->
<title>صفحتي - ToolHub</title>
<meta name="description" content="وصفي">
<meta property="og:title" content="عنواني">
```

### Dynamic Title:
```typescript
useEffect(() => {
  document.title = `${toolName} - ToolHub`;
}, [toolName]);
```

---

## 💾 localStorage

### حفظ البيانات:
```typescript
// الحفظ
localStorage.setItem('key', JSON.stringify(data));

// القراءة
const data = JSON.parse(localStorage.getItem('key'));
```

### البيانات المحفوظة:
```
- language: 'en' أو 'ar'
- theme: 'light' أو 'dark'
- toolhub_favorites: JSON string
```

---

## 🚀 النشر (Quick)

### Netlify:
```
1. نشر على GitHub
2. ربط Netlify
3. Build: pnpm build
4. Publish: dist/spa
5. انتظر 3-5 دقائق
```

### Vercel:
```
1. نشر على GitHub
2. Import من vercel.com
3. Auto deploy
4. حي في 1-2 دقيقة
```

---

## 🐛 Debugging

### Console Logging:
```typescript
console.log('Debug:', value);
console.error('Error:', error);
console.warn('Warning:', message);
```

### React DevTools:
```
1. ثبّت extension
2. افتح DevTools (F12)
3. اذهب للـ Components tab
```

---

## 📚 التوثيق

| الملف | المحتوى |
|------|---------|
| START_HERE.md | ابدأ هنا! |
| FINAL_SUMMARY.md | ملخص شامل |
| FEATURES_GUIDE.md | شرح المميزات |
| ADD_NEW_TOOLS.md | إضافة أدوات |
| DEPLOYMENT_GUIDE.md | النشر |
| MONETIZATION_GUIDE.md | الأرباح |

---

## ✅ قائمة تحقق سريعة

```
قبل النشر:
☐ اختبر جميع الأدوات
☐ اختبر Dark mode
☐ اختبر العربية
☐ اختبر على Mobile
☐ تحقق من الأداء

بعد النشر:
☐ أضف Analytics
☐ أضف AdSense
☐ أرسل Sitemap
☐ بدّل الأيقونات
☐ حدّث Meta tags
```

---

## 🎯 الميزات الرئيسية

```
✨ Framer Motion     - رسوم متحركة سلسة
✨ Real-time Search - بحث فوري
✨ Favorites        - نظام المفضلة
✨ Bilingual        - دعم العربية
✨ Dark Mode        - وضع ليلي
✨ Responsive       - متجاوب
✨ SEO Optimized    - محسّن للبحث
✨ Ad Ready         - جاهز للأرباح
```

---

## 💡 نصائح الأداء

```
✓ استخدم React.memo للمكونات الثابتة
✓ أضف lazy loading للصور
✓ استخدم useMemo للحسابات الثقيلة
✓ تقليل عمق الـ components
✓ استخدم code splitting
```

---

## 🔒 الأمان

```
✓ لا تخزن البيانات الحساسة
✓ استخدم HTTPS دائماً
✓ تجنب inline scripts
✓ تحقق من inputs المستخدم
✓ استخدم environment variables
```

---

## 📞 عند الحاجة

```
Issues:     GitHub Issues
Docs:       المجلد /docs
Support:    اقرأ الملفات
Community:  GitHub Discussions
```

---

## 🎊 أنت جاهز!

```bash
pnpm dev          # تشغيل
pnpm build        # بناء
pnpm start        # إنتاج
```

**استمتع بالبناء! 🚀**

---

**Design Rights: Moaadh Mufrah (معاذ مفرح)** ✨
