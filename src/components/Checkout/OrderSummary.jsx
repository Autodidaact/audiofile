import React from 'react';
import { useCart } from '../../context/CartContext';
import Button from '../UI/Button';

export default function OrderSummary({ onPay, isSubmitting }) {
  const { cart, cartTotal, shipping, vat, grandTotal } = useCart();

  return (
    <div className="bg-white rounded-lg p-6 sticky top-24 self-start">
      <h3 className="text-lg font-bold mb-6">Summary</h3>

      <div className="space-y-4 max-h-96 overflow-y-auto pr-2 mb-4">
        {cart.map(item => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={item.image.mobile} alt={item.name} className="w-16 h-16 rounded-lg" />
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-gray-500 text-sm">${item.price.toLocaleString()}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">x{item.quantity}</p>
          </div>
        ))}
      </div>

      <div className="border-t pt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Total</span>
          <span className="font-bold">${cartTotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-bold">${shipping.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>VAT (Included)</span>
          <span className="font-bold">${vat.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-base mt-2">
          <strong>Grand Total</strong>
          <strong className="text-[#D87D4A]">${grandTotal.toLocaleString()}</strong>
        </div>
      </div>

      <Button
        variant="primary"
        type="button"
        className="w-full mt-6"
        disabled={isSubmitting}
        onClick={onPay}
      >
        {isSubmitting ? 'Processing...' : 'Continue & Pay'}
      </Button>
    </div>
  );
}
