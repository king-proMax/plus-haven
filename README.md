# 🚀 ToolHub - Fast Web Tools for Daily Use

> A modern, bilingual (Arabic/English) web utilities platform with 10 essential tools for productivity, privacy, and speed.

**Design Rights: معاذ مفرح (Moaadh Mufrah)**  
Inspired by [10015.io](https://10015.io) but uniquely designed and built from scratch.

---

## ✨ Features

✅ **Bilingual Interface** - Full Arabic/English support with RTL layout  
✅ **Dark & Light Modes** - Choose your preferred theme with system detection  
✅ **10 Ready-to-Use Tools** - Essential utilities for daily tasks  
✅ **Lightning Fast** - All processing happens locally in your browser  
✅ **100% Private** - No data is stored or tracked  
✅ **Responsive Design** - Perfect on desktop, tablet, and mobile  
✅ **Modern UI** - Clean, professional design inspired by 10015.io  
✅ **No Signup Required** - Use immediately, no registration  

---

## 🛠️ Available Tools

### Currently Built ✅
1. **Text Case Converter** - Convert text between UPPERCASE, lowercase, Title Case, and more
2. **Smart Calculator** - Basic arithmetic operations with modern interface
3. **JSON Formatter** - Format, validate, and minify JSON data

### Ready to Add (Templates provided)
4. **Color Picker** - Convert between HEX, RGB, HSL formats
5. **Password Generator** - Create secure random passwords
6. **QR Code Generator** - Generate QR codes from text/URLs
7. **URL Encoder/Decoder** - Encode and decode URLs
8. **Base64 Converter** - Encode/decode text to Base64
9. **Image Compressor** - Compress images to reduce file size
10. **Markdown Preview** - Write and preview markdown in real-time

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open in browser
# http://localhost:5173
```

### Build for Production

```bash
# Build
pnpm build

# Preview production build
pnpm start

# Server runs on http://localhost:3000
```

---

## 📁 Project Structure

```
client/                          # React frontend
├── components/
│   ├── Header.tsx              # Navigation & theme/language toggle
│   ├── Footer.tsx              # Design credits footer
│   ├── ToolCard.tsx            # Reusable tool card
│   ├── ToolModal.tsx           # Tool popup modal
│   └── tools/
│       ├── TextConverterTool.tsx
│       ├── CalculatorTool.tsx
│       └── JSONFormatterTool.tsx
├── context/
│   └── LanguageContext.tsx     # Language & theme management
├── lib/
│   └── i18n.ts                 # Translations
└── pages/
    ├── Index.tsx               # Homepage
    └── NotFound.tsx            # 404 page

server/                         # Express backend
├── index.ts                    # Server setup
└── routes/                     # API routes

shared/                         # Shared types
└── api.ts                      # Type definitions
```

---

## 🎯 How to Add New Tools

### 1. Create Tool Component

Create `client/components/tools/MyNewTool.tsx`:

```tsx
import { useState } from 'react';
import { Copy } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function MyNewToolTool() {
  const { t } = useLanguage();
  const [input, setInput] = useState('');

  return (
    <div className="space-y-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter input..."
        className="w-full h-32 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium">
        Process
      </button>
    </div>
  );
}
```

### 2. Add to Translations

Update `client/lib/i18n.ts`:

```typescript
toolDescriptions: {
  mynewtool: {
    name: 'My New Tool',
    description: 'What it does',
  },
  // ... add Arabic translation too
}
```

### 3. Register in Homepage

Update `client/pages/Index.tsx`:

```tsx
import MyNewToolTool from '@/components/tools/MyNewTool';

const tools = [
  // ... existing tools
  {
    id: 'mynewtool',
    icon: '🎯',
    name: t('toolDescriptions.mynewtool.name'),
    description: t('toolDescriptions.mynewtool.description'),
    component: <MyNewToolTool />,
  },
];
```

✨ **Done!** Your tool automatically appears on the homepage.

---

## 🌍 Language & Theme

### Switch Language

The app includes a language toggle in the header:
- **English** (default)
- **العربية** (Arabic)

Switching language:
- Updates all UI text
- Sets document `lang` attribute
- Sets document `dir` (ltr/rtl)
- Saves to localStorage

### Dark/Light Mode

Click the theme toggle in the header to switch between:
- ☀️ **Light Mode** (default)
- 🌙 **Dark Mode** (high contrast)

Theme preference is automatically:
- Detected from system settings
- Saved to localStorage
- Applied to all components

---

## 🎨 Customization

### Change Site Name

Edit `client/components/Header.tsx`:

```tsx
<span className="font-bold text-xl">Your Site Name</span>
```

### Change Colors

Edit `client/global.css` - CSS variables in `:root`:

```css
:root {
  --primary: 217.2 91.2% 59.8%;      /* Blue */
  --secondary: 210 40% 96.1%;        /* Light gray */
  /* ... more colors */
}
```

Format: `hue saturation% lightness%` (HSL)

### Change Logo

Update `client/components/Header.tsx`:

```tsx
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
  {/* Your logo/icon here */}
</div>
```

---

## 📊 SEO & Analytics

### Add Meta Tags

Edit `index.html`:

```html
<meta name="description" content="Fast, free web tools for daily productivity">
<meta name="keywords" content="tools, calculator, converter, web utilities">
<meta name="theme-color" content="#3B82F6">
```

### Add Google Analytics

Add to `client/App.tsx`:

```tsx
useEffect(() => {
  window.dataLayer = window.dataLayer || [];
  window.gtag('config', 'GA_MEASUREMENT_ID');
}, []);
```

---

## 💰 Monetization

### Option 1: Google AdSense
Add non-intrusive ads in footer or sidebar
- CPM: $0.50 - $5 per 1000 views

### Option 2: Premium Tier
- Free: 5-7 basic tools
- Premium ($2.99/mo): All tools + advanced features

### Option 3: Affiliates
- Recommend hosting, domains, dev tools
- Earn commission on referrals

### Option 4: Sponsorships
- Tool sponsors pay $500-$2000/month
- Logo appears in tool footer

---

## 🚀 Deployment

### Netlify (Recommended)

1. Push code to GitHub
2. Connect repo to Netlify
3. Set build command: `pnpm build`
4. Set publish directory: `dist/spa`
5. Deploy automatically on push

### Vercel

1. Import project from GitHub
2. Vercel auto-detects configuration
3. Click "Deploy"
4. Done!

### Docker

```bash
# Build
docker build -t toolhub .

# Run
docker run -p 3000:3000 toolhub
```

---

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

---

## 🔒 Privacy & Security

- ✅ **No tracking** - No analytics, no cookies
- ✅ **No data storage** - Everything runs locally
- ✅ **Open source** - Code is transparent
- ✅ **HTTPS ready** - Deploy with SSL certificate

---

## 🐛 Troubleshooting

### Tools not showing?
- Check component is imported in `Index.tsx`
- Verify tool is added to `tools` array
- Check translations exist in `i18n.ts`

### Dark mode not working?
- Clear localStorage: `localStorage.clear()`
- Restart dev server
- Check CSS variables in `global.css`

### Language not updating?
- Verify `LanguageProvider` wraps app in `App.tsx`
- Check `useLanguage()` is called in component
- Verify translation keys exist in `i18n.ts`

---

## 📚 Documentation

- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Detailed setup and tool-building guide
- **[IMPLEMENTATION_DETAILS.md](./IMPLEMENTATION_DETAILS.md)** - Monetization and growth strategies
- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Complete file organization
- **[AGENTS.md](./AGENTS.md)** - Tech stack and architecture

---

## 📈 Next Steps

1. ✅ Homepage & 3 tools built
2. 📝 Build remaining 7 tools
3. 📊 Set up analytics
4. 🚀 Deploy to production
5. 📱 Test on mobile
6. 💬 Launch social media
7. 📧 Start content marketing
8. 💰 Implement monetization

---

## 🛠️ Tech Stack

- **Frontend**: React 18 + React Router 6 (SPA)
- **Styling**: TailwindCSS 3 + Dark Mode
- **Language**: TypeScript
- **Icons**: Lucide React
- **UI Components**: Radix UI + shadcn
- **Backend**: Express.js (minimal)
- **Build**: Vite
- **Package Manager**: pnpm

---

## 📄 License & Credits

**Design Rights: معاذ مفرح (Moaadh Mufrah)**

Inspired by [10015.io](https://10015.io) but uniquely designed and built from scratch.

---

## 🤝 Contributing

Want to add a tool or improve the platform? Great!

1. Create a tool component in `client/components/tools/`
2. Add translations to `client/lib/i18n.ts`
3. Register in `client/pages/Index.tsx`
4. Test thoroughly
5. Create a pull request

---

## 📞 Support

Have questions? Need help?

1. Check the [SETUP_GUIDE.md](./SETUP_GUIDE.md)
2. Review [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)
3. Check [IMPLEMENTATION_DETAILS.md](./IMPLEMENTATION_DETAILS.md)
4. Open an issue on GitHub

---

## 🎉 Getting Started

```bash
# Clone & install
git clone <your-repo>
cd toolhub
pnpm install

# Start developing
pnpm dev

# Open in browser
# http://localhost:5173

# Build for production
pnpm build
```

**Happy building! 🚀**

---

**ToolHub** - Making the web a more productive place, one tool at a time.
