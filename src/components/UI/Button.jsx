import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  disabled = false,
  onClick,
  type = 'button'
}){
  const baseClasses = 'font-bold text-xs tracking-wider uppercase transition-colors duration-200';
  
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-light text-white',
    secondary: 'bg-transparent border border-black hover:bg-black hover:text-white',
    black: 'bg-black hover:bg-gray-800 text-white',
    text: 'text-black hover:text-primary',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className} px-6 py-3`}
    >
      {children}
    </button>
  );
};

