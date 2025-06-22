import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/UI/Button';
import CartItem from '../components/Cart/CartItem';

export default function CartPage() {
  const {
    cart,
    cartTotal,
    vat,
    shipping,
    grandTotal,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart();

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-16 px-6 lg:px-0">
      <div className="container mx-auto">
        <Link to="/" className="inline-block mb-12 text-sm text-gray-500 hover:text-[#D87D4A]">
          Go Back
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-6 uppercase">Cart</h1>

            {cart.length === 0 ? (
              <div className="text-center py-8">
                <p className="mb-4">Your cart is empty</p>
                <Link to="/">
                  <Button variant="primary">Continue Shopping</Button>
                </Link>
              </div>
            ) : (
              <>
                <div className="space-y-6 mb-6">
                  {cart.map(item => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onRemove={() => removeFromCart(item.id)}
                      onUpdateQuantity={newQty => updateQuantity(item.id, newQty)}
                    />
                  ))}
                </div>
                <button
                  onClick={clearCart}
                  className="text-gray-500 underline hover:text-[#D87D4A] mb-6"
                >
                  Remove all
                </button>
              </>
            )}
          </div>

          {cart.length > 0 && (
            <div className="bg-white rounded-lg p-6 h-fit">
              <h3 className="text-lg font-bold mb-6 uppercase">Summary</h3>
              <div className="space-y-4 mb-8 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Total</span>
                  <span className="font-bold">$ {cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-bold">$ {shipping.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">VAT (included)</span>
                  <span className="font-bold">$ {vat.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mt-4 text-base">
                  <span className="text-gray-500">Grand Total</span>
                  <span className="font-bold text-[#D87D4A]">
                    $ {grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <Link to="/checkout" className="block">
                <Button variant="primary" className="w-full">
                  CONTINUE & PAY
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
