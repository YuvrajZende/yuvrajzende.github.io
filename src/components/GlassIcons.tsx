import React from 'react';
import { cn } from '@/lib/utils';

interface GlassIconItem {
  icon: React.ReactNode;
  color: string;
  label: string;
}

interface GlassIconsProps {
  items: GlassIconItem[];
  className?: string;
}

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-500/20 border-blue-500/30 text-blue-600 dark:text-blue-400 hover:shadow-blue-500/30',
      purple: 'bg-purple-500/20 border-purple-500/30 text-purple-600 dark:text-purple-400 hover:shadow-purple-500/30',
      red: 'bg-red-500/20 border-red-500/30 text-red-600 dark:text-red-400 hover:shadow-red-500/30',
      indigo: 'bg-indigo-500/20 border-indigo-500/30 text-indigo-600 dark:text-indigo-400 hover:shadow-indigo-500/30',
      orange: 'bg-orange-500/20 border-orange-500/30 text-orange-600 dark:text-orange-400 hover:shadow-orange-500/30',
      green: 'bg-green-500/20 border-green-500/30 text-green-600 dark:text-green-400 hover:shadow-green-500/30',
      yellow: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-600 dark:text-yellow-400 hover:shadow-yellow-500/30',
      pink: 'bg-pink-500/20 border-pink-500/30 text-pink-600 dark:text-pink-400 hover:shadow-pink-500/30',
      teal: 'bg-teal-500/20 border-teal-500/30 text-teal-600 dark:text-teal-400 hover:shadow-teal-500/30',
      gray: 'bg-gray-500/20 border-gray-500/30 text-gray-600 dark:text-gray-400 hover:shadow-gray-500/30',
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className={cn("grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl",
            "bg-white/10 dark:bg-black/10",
            getColorClasses(item.color)
          )}
        >
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GlassIcons; 