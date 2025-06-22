import React from 'react';

export default function FormInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  className = '',
}){
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex justify-between">
        <label htmlFor={name} className="font-bold text-sm mb-2">
          {label}
        </label>
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
    </div>
  );
};

