import { createContext, useContext, useState, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('audiophile-cart', []);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastOrder, setLastOrder] = useLocalStorage('audiophile-last-order', null);

  const addToCart = useCallback((product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      return existingItem
        ? prevCart.map(item => 
            item.id === product.id 
              ? { ...item, quantity: item.quantity + quantity } 
              : item
          )
        : [...prevCart, { ...product, quantity }];
    });
  }, [setCart]);

  const removeFromCart = useCallback((productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  }, [setCart]);

  const updateQuantity = useCallback((productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  }, [setCart]);

  const clearCart = useCallback(() => {
    setCart([]);
  }, [setCart]);

  const createOrder = useCallback(() => {
    const order = {
      id: Date.now(),
      items: [...cart],
      date: new Date().toISOString(),
      total: calculateTotals().grandTotal
    };
    setLastOrder(order);
    return order;
  }, [cart, setLastOrder]);

  const calculateTotals = useCallback(() => {
    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const vat = Math.round(cartTotal * 0.2);
    const shipping = cart.length > 0 ? 50 : 0;
    const grandTotal = cartTotal + vat + shipping;
    return { cartTotal, vat, shipping, grandTotal };
  }, [cart]);

  const { cartTotal, vat, shipping, grandTotal } = calculateTotals();

  return (
    <CartContext.Provider value={{
      cart,
      cartTotal,
      vat,
      shipping,
      grandTotal,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      createOrder,
      lastOrder,
      cartCount: cart.reduce((count, item) => count + item.quantity, 0)
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);