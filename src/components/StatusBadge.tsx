import React from 'react';
import { CheckCircle, Clock, Calendar } from 'lucide-react';

interface StatusBadgeProps {
  status: 'completed' | 'in-progress' | 'coming-soon';
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'completed':
        return {
          icon: <CheckCircle className="w-3 h-3" />,
          text: 'Completed',
          bgColor: 'bg-green-100 dark:bg-green-900/20',
          textColor: 'text-green-700 dark:text-green-300',
          borderColor: 'border-green-200 dark:border-green-800'
        };
      case 'in-progress':
        return {
          icon: <Clock className="w-3 h-3" />,
          text: 'In Progress',
          bgColor: 'bg-blue-100 dark:bg-blue-900/20',
          textColor: 'text-blue-700 dark:text-blue-300',
          borderColor: 'border-blue-200 dark:border-blue-800'
        };
      case 'coming-soon':
        return {
          icon: <Calendar className="w-3 h-3" />,
          text: 'Coming Soon',
          bgColor: 'bg-orange-100 dark:bg-orange-900/20',
          textColor: 'text-orange-700 dark:text-orange-300',
          borderColor: 'border-orange-200 dark:border-orange-800'
        };
      default:
        return {
          icon: <CheckCircle className="w-3 h-3" />,
          text: 'Completed',
          bgColor: 'bg-green-100 dark:bg-green-900/20',
          textColor: 'text-green-700 dark:text-green-300',
          borderColor: 'border-green-200 dark:border-green-800'
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <span
      className={`
        inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border
        ${config.bgColor} ${config.textColor} ${config.borderColor}
        ${className}
      `}
    >
      {config.icon}
      {config.text}
    </span>
  );
};

export default StatusBadge; 