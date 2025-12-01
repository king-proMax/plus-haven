import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
            <p className="font-semibold text-slate-900 dark:text-white">{t('footer.designBy')}</p>
            <p>{t('footer.inspired')}</p>
            <p>{t('footer.allRights')}</p>
          </div>

          <div className="text-right text-sm text-slate-500 dark:text-slate-500">
            <p>© 2024 ToolHub</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
