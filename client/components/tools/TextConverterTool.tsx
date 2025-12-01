import { useState } from 'react';
import { Copy, RotateCcw } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function TextConverterTool() {
  const { t } = useLanguage();
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);

  const conversions = {
    uppercase: (text: string) => text.toUpperCase(),
    lowercase: (text: string) => text.toLowerCase(),
    titlecase: (text: string) =>
      text
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' '),
    sentencecase: (text: string) =>
      text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(),
    alternating: (text: string) =>
      text
        .split('')
        .map((char, i) => (i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
        .join(''),
    reversecase: (text: string) =>
      text
        .split('')
        .map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
        .join(''),
  };

  const handleConvert = (type: keyof typeof conversions) => {
    const converted = conversions[type](input);
    setInput(converted);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(input);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setInput('');
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          {t('toolDescriptions.textConverter.name')}
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your text here..."
          className="w-full h-32 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div>

      <div>
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
          Conversion Options
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <button
            onClick={() => handleConvert('uppercase')}
            className="px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition"
          >
            UPPERCASE
          </button>
          <button
            onClick={() => handleConvert('lowercase')}
            className="px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition"
          >
            lowercase
          </button>
          <button
            onClick={() => handleConvert('titlecase')}
            className="px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition"
          >
            Title Case
          </button>
          <button
            onClick={() => handleConvert('sentencecase')}
            className="px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition"
          >
            Sentence case
          </button>
          <button
            onClick={() => handleConvert('alternating')}
            className="px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition"
          >
            aLtErNaTe
          </button>
          <button
            onClick={() => handleConvert('reversecase')}
            className="px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition"
          >
            rEvErSe
          </button>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleCopy}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium transition"
        >
          <Copy className="w-4 h-4" />
          {copied ? t('common.copied') : t('common.copy')}
        </button>
        <button
          onClick={handleReset}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-medium transition"
        >
          <RotateCcw className="w-4 h-4" />
          {t('common.reset')}
        </button>
      </div>

      <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
        <p className="text-xs text-blue-700 dark:text-blue-300">
          💡 <strong>Tip:</strong> You can convert your text to any case format with a single click. Perfect for coding, writing, and content creation!
        </p>
      </div>
    </div>
  );
}
