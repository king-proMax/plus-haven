export type Language = 'en' | 'ar';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      tools: 'Tools',
      about: 'About',
    },
    
    // Hero Section
    hero: {
      title: 'Fast Web Tools for Daily Use',
      subtitle: 'Simple, powerful, and free utilities to boost your productivity',
      cta: 'Explore Tools',
    },

    // Tools Section
    tools: {
      title: 'Our Tools',
      description: 'Small but mighty tools designed for everyday tasks',
      viewAll: 'View All Tools',
    },

    // Footer
    footer: {
      designBy: 'Design Rights: Moaadh Mufrah',
      allRights: 'All rights reserved',
      inspired: 'Inspired by 10015.io but uniquely designed',
    },

    // Tool Descriptions
    toolDescriptions: {
      textConverter: {
        name: 'Text Case Converter',
        description: 'Convert text between uppercase, lowercase, title case, and more',
      },
      calculator: {
        name: 'Smart Calculator',
        description: 'Perform quick calculations with basic arithmetic operations',
      },
      jsonFormatter: {
        name: 'JSON Formatter',
        description: 'Format, validate, minify, and beautify JSON data',
      },
      colorPicker: {
        name: 'Color Picker',
        description: 'Convert between HEX, RGB, HSL color formats',
      },
      passwordGenerator: {
        name: 'Password Generator',
        description: 'Create secure random passwords with custom options',
      },
      qrGenerator: {
        name: 'QR Code Generator',
        description: 'Generate QR codes from text or URLs',
      },
      urlEncoder: {
        name: 'URL Encoder/Decoder',
        description: 'Encode and decode URLs and query parameters',
      },
      base64: {
        name: 'Base64 Converter',
        description: 'Encode/decode text and files to/from Base64',
      },
      imageCompressor: {
        name: 'Image Compressor',
        description: 'Compress images to reduce file size',
      },
      markdownPreview: {
        name: 'Markdown Preview',
        description: 'Write markdown and preview the rendered output',
      },
    },

    // Common
    common: {
      close: 'Close',
      copy: 'Copy',
      copied: 'Copied!',
      clear: 'Clear',
      reset: 'Reset',
      upload: 'Upload',
      download: 'Download',
    },
  },

  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      tools: 'الأدوات',
      about: 'عن الموقع',
    },

    // Hero Section
    hero: {
      title: 'أدوات ويب سريعة للاستخدام اليومي',
      subtitle: 'أدوات بسيطة وقوية ومجانية لتعزيز إنتاجيتك',
      cta: 'استكشف الأدوات',
    },

    // Tools Section
    tools: {
      title: 'أدواتنا',
      description: 'أدوات صغيرة لكن قوية مصممة للمهام اليومية',
      viewAll: 'عرض جميع الأدوات',
    },

    // Footer
    footer: {
      designBy: 'حقوق التصميم: معاذ مفرح',
      allRights: 'جميع الحقوق محفوظة',
      inspired: 'مستوحى من 10015.io لكن مصمم بشكل فريد',
    },

    // Tool Descriptions
    toolDescriptions: {
      textConverter: {
        name: 'محول النصوص',
        description: 'حول النصوص بين الأحرف الكبيرة والصغيرة والعناوين وغيرها',
      },
      calculator: {
        name: 'آلة حاسبة ذكية',
        description: 'قم بإجراء حسابات سريعة باستخدام العمليات الحسابية الأساسية',
      },
      jsonFormatter: {
        name: 'منسق JSON',
        description: 'تنسيق والتحقق من صحة وضغط وتجميل بيانات JSON',
      },
      colorPicker: {
        name: 'منتقي الألوان',
        description: 'تحويل بين صيغ الألوان HEX و RGB و HSL',
      },
      passwordGenerator: {
        name: 'مولد كلمات السر',
        description: 'إنشاء كلمات سر عشوائية آمنة بخيارات مخصصة',
      },
      qrGenerator: {
        name: 'مولد رمز الاستجابة السريعة',
        description: 'إنشاء رموز QR من النصوص أو الروابط',
      },
      urlEncoder: {
        name: 'محول ترميز الرابط',
        description: 'ترميز وفك ترميز الروابط ومعاملات الاستعلام',
      },
      base64: {
        name: 'محول Base64',
        description: 'ترميز/فك ترميز النصوص والملفات إلى/من Base64',
      },
      imageCompressor: {
        name: 'ضاغط الصور',
        description: 'ضغط الصور لتقليل حجم الملف',
      },
      markdownPreview: {
        name: 'معاينة Markdown',
        description: 'اكتب markdown ومعاينة المخرجات المعروضة',
      },
    },

    // Common
    common: {
      close: 'إغلاق',
      copy: 'نسخ',
      copied: 'تم النسخ!',
      clear: 'مسح',
      reset: 'إعادة تعيين',
      upload: 'تحميل',
      download: 'تنزيل',
    },
  },
};

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }
  
  return typeof value === 'string' ? value : key;
}
