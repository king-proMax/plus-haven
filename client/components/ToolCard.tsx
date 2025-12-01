import { ArrowRight } from 'lucide-react';
import React from 'react';

interface ToolCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  onClick: () => void;
}

export default function ToolCard({ icon, name, description, onClick }: ToolCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all hover:shadow-lg dark:hover:shadow-blue-500/10 text-left"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl">{icon}</div>
        <ArrowRight className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition transform group-hover:translate-x-1" />
      </div>
      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{name}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
    </button>
  );
}
