
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', showText = true, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden`}>
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
        
        {/* Main logo symbol - stylized "P" */}
        <div className="relative z-10 text-white font-bold text-lg flex items-center justify-center">
          <svg 
            viewBox="0 0 24 24" 
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 2h6c3.31 0 6 2.69 6 6 0 2.22-1.21 4.15-3 5.19V22h-3v-7H9v7H6V2zm3 3v5h3c1.66 0 3-1.34 3-3s-1.34-3-3-3H9z"/>
          </svg>
        </div>
        
        {/* Subtle shine effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
      </div>

      {/* Logo Text */}
      {showText && (
        <div>
          <span className={`${textSizeClasses[size]} font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
            Prime
          </span>
          <div className="text-xs text-gray-500 font-medium">by ArcnetLabs</div>
        </div>
      )}
    </div>
  );
};

export default Logo;
