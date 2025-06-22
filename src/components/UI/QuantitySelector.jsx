import React from 'react';

export default function QuantitySelector({ quantity, onDecrease, onIncrease, className = '' }){
  return (
    <div className={`flex items-center bg-gray-100 ${className}`}>
      <button
        onClick={onDecrease}
        className="px-4 py-2 text-black opacity-25 hover:text-primary hover:opacity-100"
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span className="w-8 text-center font-bold">{quantity}</span>
      <button
        onClick={onIncrease}
        className="px-4 py-2 text-black opacity-25 hover:text-primary hover:opacity-100"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

