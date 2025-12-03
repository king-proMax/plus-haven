# ToolHub - How to Add New Tools
## كيفية إضافة أدوات جديدة بسهولة

---

## 🚀 Quick Start - 3 خطوات فقط!

### Step 1: إنشاء مكون الأداة (5 دقائق)
### Step 2: إضافة الترجمات (2 دقيقة)
### Step 3: تسجيل الأداة في الصفحة الرئيسية (1 دقيقة)

**المجموع: 8 دقائق فقط! ⏱️**

---

## 📝 Step 1: إنشاء مكون الأداة

### المسار:
```
client/components/tools/[ToolName]Tool.tsx
```

### الهيكل الأساسي:
```tsx
import { useState } from 'react';
import { Copy, RotateCcw } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function [ToolName]Tool() {
  const { t } = useLanguage();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const handleConvert = () => {
    // Your tool logic here
    setOutput('result');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Input */}
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Input
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
          className="w-full h-32 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Action Button */}
      <button
        onClick={handleConvert}
        className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition"
      >
        Process
      </button>

      {/* Output */}
      {output && (
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Output
          </label>
          <textarea
            value={output}
            readOnly
            className="w-full h-32 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white resize-none"
          />
          <button
            onClick={handleCopy}
            className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition flex items-center gap-2"
          >
            <Copy className="w-4 h-4" />
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}

      {/* Help Text */}
      <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
        <p className="text-xs text-blue-700 dark:text-blue-300">
          💡 <strong>Tip:</strong> Your tool description here
        </p>
      </div>
    </div>
  );
}
```

---

## 🌐 Step 2: إضافة الترجمات

### الملف:
```
client/lib/i18n.ts
```

### إضافة في الإنجليزية (English):
```typescript
toolDescriptions: {
  // ... existing tools
  yourtoolname: {
    name: 'Your Tool Name',
    description: 'Brief description of what it does',
  },
}
```

### إضافة في العربية (Arabic):
```typescript
toolDescriptions: {
  // ... existing tools
  yourtoolname: {
    name: 'اسم أداتك',
    description: 'وصف موجز لما تفعله',
  },
}
```

### مثال كامل:
```typescript
// English
en: {
  toolDescriptions: {
    texttovoice: {
      name: 'Text to Voice',
      description: 'Convert written text to audio with natural voices',
    },
  }
},

// Arabic
ar: {
  toolDescriptions: {
    texttovoice: {
      name: 'تحويل النص إلى صوت',
      description: 'حول النصوص المكتوبة إلى ملفات صوتية',
    },
  }
}
```

---

## 📋 Step 3: تسجيل الأداة

### الملف:
```
client/pages/Index.tsx
```

### 3a. استيراد المكون:
أضف في أعلى الملف:
```typescript
import [ToolName]Tool from '@/components/tools/[ToolName]Tool';
```

### مثال:
```typescript
import TextToVoiceTool from '@/components/tools/TextToVoiceTool';
```

### 3b. إضافة إلى array الأدوات:

ابحث عن `const allTools = [` وأضف في النهاية:

```typescript
{
  id: 'toolid',
  icon: '🎤',
  name: t('toolDescriptions.toolid.name'),
  description: t('toolDescriptions.toolid.description'),
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  component: <TextToVoiceTool />,
},
```

### مثال كامل:
```typescript
{
  id: 'texttovoice',
  icon: '🎤',
  name: t('toolDescriptions.texttovoice.name'),
  description: t('toolDescriptions.texttovoice.description'),
  keywords: ['text', 'voice', 'audio', 'speech', 'convert'],
  component: <TextToVoiceTool />,
},
```

---

## ✅ التحقق من أن الأداة تعمل

```bash
# 1. فتح المتصفح
http://localhost:5173

# 2. ابحث عن الأداة الجديدة
# أو اكتب اسمها في شريط البحث

# 3. انقر على الأداة
# اختبر جميع الميزات

# 4. تبديل اللغة
# اختبر الترجمات العربية
```

---

## 🎨 أمثلة أدوات جاهزة

### Example 1: Base64 Converter

```tsx
import { useState } from 'react';
import { Copy } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Base64Tool() {
  const { t } = useLanguage();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleEncode = () => {
    setOutput(btoa(input));
  };

  const handleDecode = () => {
    try {
      setOutput(atob(input));
    } catch {
      setOutput('Invalid Base64');
    }
  };

  return (
    <div className="space-y-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text..."
        className="w-full h-32 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex gap-2">
        <button
          onClick={handleEncode}
          className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium"
        >
          Encode
        </button>
        <button
          onClick={handleDecode}
          className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium"
        >
          Decode
        </button>
      </div>

      {output && (
        <div>
          <textarea
            value={output}
            readOnly
            className="w-full h-32 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white resize-none"
          />
          <button
            onClick={() => navigator.clipboard.writeText(output)}
            className="mt-2 w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
          >
            Copy
          </button>
        </div>
      )}
    </div>
  );
}
```

### Example 2: Markdown to HTML

```tsx
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function MarkdownTool() {
  const { t } = useLanguage();
  const [markdown, setMarkdown] = useState('# Hello\n\n**Bold text**');

  // Simple markdown to HTML converter
  const convertToHtml = (md: string) => {
    return md
      .replace(/^### (.*?)$/gm, '<h3>$1</h3>')
      .replace(/^## (.*?)$/gm, '<h2>$1</h2>')
      .replace(/^# (.*?)$/gm, '<h1>$1</h1>')
      .replace(/\*\*(.*?)\*\*/gm, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gm, '<em>$1</em>')
      .replace(/\n/gm, '<br>');
  };

  const html = convertToHtml(markdown);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium mb-2">Markdown</label>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="w-full h-64 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Preview</label>
        <div
          className="w-full h-64 p-4 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 overflow-auto prose prose-sm"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
```

---

## 🎯 Tips for Better Tools

1. **Input Validation**
```typescript
if (!input.trim()) {
  setError('Input cannot be empty');
  return;
}
```

2. **Error Handling**
```typescript
try {
  const result = riskyOperation(input);
  setOutput(result);
} catch (error) {
  setError(error.message);
}
```

3. **Real-time Processing**
```typescript
useEffect(() => {
  const timer = setTimeout(() => {
    setOutput(process(input));
  }, 300); // debounce
  return () => clearTimeout(timer);
}, [input]);
```

4. **File Upload Support**
```typescript
const handleFile = (file: File) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const content = e.target?.result;
    setOutput(processFile(content));
  };
  reader.readAsText(file);
};
```

---

## 📱 Responsive Design

تأكد من أن الأداة تعمل على:
- ✅ Mobile (< 640px)
- ✅ Tablet (640px - 1024px)
- ✅ Desktop (> 1024px)

استخدم:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {/* Content */}
</div>
```

---

## 🌙 Dark Mode Support

جميع الأدوات تدعم Dark Mode تلقائياً:
```tsx
className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
```

---

## 🔄 Version Control

```bash
# 1. Create a new branch
git checkout -b add-newtool

# 2. Make your changes
# 3. Commit
git add .
git commit -m "Add new tool: Tool Name"

# 4. Push
git push origin add-newtool

# 5. Create PR
# على GitHub
```

---

## 📊 Tool Ideas (أفكار أدوات إضافية)

```
✨ Advanced:
- PDF Generator
- Video Compressor
- Code Syntax Highlighter
- API Response Formatter
- SSH Key Generator

🎨 Creative:
- Gradient Generator
- CSS Animation Builder
- Font Pair Generator
- Icon Converter

📊 Productivity:
- Todo List
- Timer / Pomodoro
- Note Taker
- Task Scheduler
- Expense Tracker

🔧 Developer:
- Regex Tester
- JWT Decoder
- UUID Generator
- Cron Parser
- Diff Checker
```

---

## ✅ Checklist Before Submitting

```
☐ Tool logic is correct
☐ English translations added
☐ Arabic translations added
☐ Responsive design tested
☐ Dark mode tested
☐ Mobile tested
☐ No console errors
☐ Copy button works
☐ Input validation added
☐ Error messages clear
☐ Help text included
☐ Animations smooth
```

---

## 🎉 That's It!

Your new tool is now live on ToolHub! 🚀

**Time Investment: ~8-15 minutes**

---

## 🆘 Troubleshooting

### Tool not showing up?
```
✓ Check import statement
✓ Check tool registered in allTools array
✓ Check translation keys match
✓ Reload browser (Ctrl+Shift+R)
```

### Translations not working?
```
✓ Verify keys in i18n.ts
✓ Check spelling
✓ Both EN and AR translations added
✓ Key path matches (e.g., toolDescriptions.toolid.name)
```

### Styling issues?
```
✓ Use predefined classes
✓ Check dark: prefix for dark mode
✓ Use Tailwind utility classes
✓ Check responsive breakpoints
```

---

**Happy Building! 🎨**

Design Rights: Moaadh Mufrah (معاذ مفرح)
