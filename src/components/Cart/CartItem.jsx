import React from 'react';
import QuantitySelector from '../UI/QuantitySelector';

export default function CartItem ({ item, onRemove, onUpdateQuantity }){
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          src={item.image.mobile}
          alt={item.name}
          className="w-16 h-16 rounded-lg"
        />
        <div>
          <h4 className="font-bold">{item.name}</h4>
          <p className="text-gray-500">$ {item.price.toLocaleString()}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <QuantitySelector
          quantity={item.quantity}
          onDecrease={() => onUpdateQuantity(item.quantity - 1)}
          onIncrease={() => onUpdateQuantity(item.quantity + 1)}
          className="h-8"
        />
        <button
          onClick={onRemove}
          className="text-gray-500 hover:text-primary"
          aria-label="Remove item"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

