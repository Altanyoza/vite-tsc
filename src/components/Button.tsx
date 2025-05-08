import React from 'react';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'amber';
  title: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  size = 'medium', 
  color = 'primary', 
  title, 
  type = 'button', 
  onClick, 
  className = '',
  disabled = false
}) => {
  const baseClass = 'flex items-center justify-center rounded-md transition-colors duration-300';
  
  const sizeClasses = {
    small: 'h-8 px-3 text-sm',
    medium: 'h-10 px-4 text-base',
    large: 'h-12 px-6 text-lg'
  };
  
  const colorClasses = {
    primary: 'bg-sky-500 hover:bg-sky-600 text-white',
    secondary: 'bg-red-500 hover:bg-red-600 text-white',
    amber: 'bg-amber-500 hover:bg-amber-600 text-white'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;