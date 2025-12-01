import { useState } from 'react';
import { Copy, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function JSONFormatterTool() {
  const { t } = useLanguage();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const validateAndFormat = (json: string) => {
    try {
      const parsed = JSON.parse(json);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setError('');
      setIsValid(true);
    } catch (err: any) {
      setError(err.message || 'Invalid JSON');
      setOutput('');
      setIsValid(false);
    }
  };

  const handleFormat = () => {
    validateAndFormat(input);
  };

  const handleMinify = () => {
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      setError('');
      setIsValid(true);
    } catch (err: any) {
      setError(err.message || 'Invalid JSON');
      setOutput('');
      setIsValid(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError('');
    setIsValid(null);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Input */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Input JSON
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='{"name": "John", "age": 30}'
            className="w-full h-64 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
          />
        </div>

        {/* Output */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Output
            {isValid === true && (
              <span className="ml-2 inline-flex items-center gap-1 text-green-600 dark:text-green-400">
                <CheckCircle2 className="w-4 h-4" /> Valid
              </span>
            )}
            {isValid === false && (
              <span className="ml-2 inline-flex items-center gap-1 text-red-600 dark:text-red-400">
                <AlertCircle className="w-4 h-4" /> Invalid
              </span>
            )}
          </label>
          <textarea
            value={output}
            readOnly
            placeholder="Formatted output will appear here"
            className="w-full h-64 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none font-mono text-sm resize-none"
          />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <p className="text-sm text-red-700 dark:text-red-300">
            <strong>Error:</strong> {error}
          </p>
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={handleFormat}
          className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition"
        >
          Format
        </button>
        <button
          onClick={handleMinify}
          className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition"
        >
          Minify
        </button>
        <button
          onClick={handleCopy}
          disabled={!output}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white font-medium transition"
        >
          <Copy className="w-4 h-4" />
          {copied ? t('common.copied') : t('common.copy')}
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-medium transition"
        >
          {t('common.clear')}
        </button>
      </div>

      <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
        <p className="text-xs text-blue-700 dark:text-blue-300">
          💡 <strong>Tip:</strong> Paste your JSON and click "Format" to validate and beautify it. Use "Minify" to reduce file size.
        </p>
      </div>
    </div>
  );
}
