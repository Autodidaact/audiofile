import React from 'react';
import { useCart } from '../../context/CartContext';
import Button from '../UI/Button';

export default function ConfirmationModal({ onClose }) {
  const { lastOrder } = useCart();

  if (!lastOrder) return null;

  const mainItem = lastOrder.items[0];
  const otherCount = lastOrder.items.length - 1;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 w-full max-w-lg">
        {/* Success Icon */}
        <div className="mb-6">
          <img src="./assets/checkout/icon-order-confirmation.svg" alt="Order Confirmed" className="w-16" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-4">Thank you for your order</h2>
        <p className="text-gray-500 mb-6">You will receive an email confirmation shortly.</p>

        {/* Order Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 rounded-lg overflow-hidden mb-6">
          {/* Left: item summary */}
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={mainItem.image.mobile}
                alt={mainItem.name}
                className="w-12 h-12 rounded"
              />
              <div>
                <p className="font-bold">{mainItem.name}</p>
                <p className="text-sm text-gray-500">${mainItem.price.toLocaleString()}</p>
              </div>
              <span className="ml-auto text-sm text-gray-500">x{mainItem.quantity}</span>
            </div>

            {/* + Other items count */}
            {otherCount > 0 && (
              <div className="border-t pt-4 text-center text-gray-500 text-sm">
                and {otherCount} other item{otherCount > 1 && 's'}
              </div>
            )}
          </div>

          {/* Right: Grand total */}
          <div className="bg-black text-white p-6 flex flex-col justify-center">
            <p className="text-sm uppercase text-gray-400 mb-2">Grand Total</p>
            <p className="text-lg font-bold">${lastOrder.total.toLocaleString()}</p>
          </div>
        </div>

        {/* Back button */}
        <Button
          onClick={onClose}
          className="w-full bg-[#D87D4A] hover:bg-[#fbaf85] transition text-white py-4 uppercase tracking-widest"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
