import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import ToolModal from '@/components/ToolModal';
import TextConverterTool from '@/components/tools/TextConverterTool';
import CalculatorTool from '@/components/tools/CalculatorTool';
import JSONFormatterTool from '@/components/tools/JSONFormatterTool';
import { useLanguage } from '@/context/LanguageContext';
import { Zap, Calculator, Code, Palette, Lock, QrCode, Link2, Key, Image, FileText } from 'lucide-react';

export default function Index() {
  const { t } = useLanguage();
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const tools = [
    {
      id: 'textconverter',
      icon: '✍️',
      name: t('toolDescriptions.textConverter.name'),
      description: t('toolDescriptions.textConverter.description'),
      component: <TextConverterTool />,
    },
    {
      id: 'calculator',
      icon: '🧮',
      name: t('toolDescriptions.calculator.name'),
      description: t('toolDescriptions.calculator.description'),
      component: <CalculatorTool />,
    },
    {
      id: 'jsonformatter',
      icon: '{}',
      name: t('toolDescriptions.jsonFormatter.name'),
      description: t('toolDescriptions.jsonFormatter.description'),
      component: <JSONFormatterTool />,
    },
    {
      id: 'colorpicker',
      icon: '🎨',
      name: t('toolDescriptions.colorPicker.name'),
      description: t('toolDescriptions.colorPicker.description'),
      component: <div className="p-4 text-center text-slate-600 dark:text-slate-400">Coming soon...</div>,
    },
    {
      id: 'passwordgen',
      icon: '🔐',
      name: t('toolDescriptions.passwordGenerator.name'),
      description: t('toolDescriptions.passwordGenerator.description'),
      component: <div className="p-4 text-center text-slate-600 dark:text-slate-400">Coming soon...</div>,
    },
    {
      id: 'qrcode',
      icon: '📱',
      name: t('toolDescriptions.qrGenerator.name'),
      description: t('toolDescriptions.qrGenerator.description'),
      component: <div className="p-4 text-center text-slate-600 dark:text-slate-400">Coming soon...</div>,
    },
    {
      id: 'urlencoder',
      icon: '🔗',
      name: t('toolDescriptions.urlEncoder.name'),
      description: t('toolDescriptions.urlEncoder.description'),
      component: <div className="p-4 text-center text-slate-600 dark:text-slate-400">Coming soon...</div>,
    },
    {
      id: 'base64',
      icon: '📝',
      name: t('toolDescriptions.base64.name'),
      description: t('toolDescriptions.base64.description'),
      component: <div className="p-4 text-center text-slate-600 dark:text-slate-400">Coming soon...</div>,
    },
    {
      id: 'imagecompressor',
      icon: '🖼️',
      name: t('toolDescriptions.imageCompressor.name'),
      description: t('toolDescriptions.imageCompressor.description'),
      component: <div className="p-4 text-center text-slate-600 dark:text-slate-400">Coming soon...</div>,
    },
    {
      id: 'markdown',
      icon: '📄',
      name: t('toolDescriptions.markdownPreview.name'),
      description: t('toolDescriptions.markdownPreview.description'),
      component: <div className="p-4 text-center text-slate-600 dark:text-slate-400">Coming soon...</div>,
    },
  ];

  const currentTool = tools.find((tool) => tool.id === selectedTool);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 dark:from-blue-950/20 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-6">
              <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-300">{t('hero.title')}</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {t('hero.title')}
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>

            <button
              onClick={() => {
                document.getElementById('tools-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/30"
            >
              {t('hero.cta')}
              <Zap className="w-5 h-5" />
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/10 dark:bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-purple-200/10 dark:bg-purple-500/10 rounded-full filter blur-3xl pointer-events-none" />
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools-section" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('tools.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {t('tools.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard
              key={tool.id}
              icon={tool.icon}
              name={tool.name}
              description={tool.description}
              onClick={() => setSelectedTool(tool.id)}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800/50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Why Choose ToolHub?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100 dark:bg-blue-900/30 mb-4">
                <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Lightning Fast</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Optimized tools that run instantly in your browser
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-green-100 dark:bg-green-900/30 mb-4">
                <Lock className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">100% Private</h3>
              <p className="text-slate-600 dark:text-slate-400">
                All processing happens locally, nothing is stored or shared
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-purple-100 dark:bg-purple-900/30 mb-4">
                <Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Always Free</h3>
              <p className="text-slate-600 dark:text-slate-400">
                No registration, no paywalls, just pure utility
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Tool Modal */}
      <ToolModal
        isOpen={selectedTool !== null}
        onClose={() => setSelectedTool(null)}
        title={currentTool?.name || ''}
      >
        {currentTool?.component}
      </ToolModal>
    </div>
  );
}
