import React from 'react';
import { useCart } from '../../context/CartContext';
import Button from '../UI/Button';
import CartItem from './CartItem';

export default function CartModal(){
  const {
    cart,
    cartTotal,
    vat,
    shipping,
    grandTotal,
    removeFromCart,
    updateQuantity,
    clearCart,
    setIsCartOpen,
  } = useCart();

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setIsCartOpen(false)}
      ></div>
      <div className="absolute top-32 right-6 left-6 md:left-auto md:right-6 md:w-96 bg-white rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold">Cart ({cart.length})</h3>
          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="text-gray-500 underline hover:text-primary"
            >
              Remove all
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <p className="text-center py-8">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-6 mb-6">
              {cart.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={() => removeFromCart(item.id)}
                  onUpdateQuantity={(newQty) => updateQuantity(item.id, newQty)}
                />
              ))}
            </div>

            <div className="flex justify-between mb-2">
              <span className="text-gray-500">TOTAL</span>
              <span className="font-bold">$ {cartTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">SHIPPING</span>
              <span className="font-bold">$ {shipping.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-gray-500">VAT (INCLUDED)</span>
              <span className="font-bold">$ {vat.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-gray-500">GRAND TOTAL</span>
              <span className="font-bold text-primary">
                $ {grandTotal.toLocaleString()}
              </span>
            </div>

            <Button
              variant="primary"
              className="w-full"
              onClick={() => {
                setIsCartOpen(false);
                window.location.href = '/checkout';
              }}
            >
              Checkout
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

