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
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl'
  };

  const subtextSizeClasses = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-sm'
  };

  const textGradient = 'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600';

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-xl flex items-center justify-center shadow-xl relative overflow-hidden`}>
        {/* Background pattern with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-black/90"></div>
        
        {/* Enhanced logo symbol with gradient "P" */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <svg 
            viewBox="0 0 100 100" 
            className="w-3/5 h-3/5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="200%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#f3f4f6" />
                <stop offset="100%" stopColor="#9ca3af" />
              </linearGradient>
              <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e5e7eb" />
                <stop offset="50%" stopColor="#9ca3af" />
                <stop offset="100%" stopColor="#4b5563" />
              </linearGradient>
              <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f3f4f6" />
                <stop offset="100%" stopColor="#9ca3af" />
              </linearGradient>
              <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            <g filter="url(#glow)">
              {/* Main P shape with body gradient */}
              <path 
                d="M30 20h30c8.28 0 15 6.72 15 15s-6.72 15-15 15H50v30H30V20z" 
                fill="url(#bodyGradient)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              
              {/* Top curve highlight */}
              <path 
                d="M30 20h30c8.28 0 15 6.72 15 15s-6.72 15-15 15H50V20h-20z" 
                fill="url(#mainGradient)"
                fillOpacity="0.7"
              />
              
              <path 
                d="M50 20v30h10c4.14 0 7.5-3.36 7.5-7.5S64.14 35 60 35H50V20z" 
                fill="url(#innerGradient)"
                fillOpacity="0.8"
              />
            </g>
          </svg>
        </div>
        
        {/* Subtle shine effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40"></div>
        
        {/* Subtle reflection */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-white/5 to-transparent rounded-full transform translate-x-1/4 translate-y-1/4"></div>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="ml-3 flex flex-col">
          <span className={`font-black tracking-tight ${textSizeClasses[size]} ${textGradient}`}>
            Prime
          </span>
          <span className={`text-gray-500 font-medium ${subtextSizeClasses[size]} mt-[-2px]`}>
            by ArcnetLabs
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
