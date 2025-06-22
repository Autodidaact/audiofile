import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartModal from './Cart/CartModal';

export default function Header() {
  const { cartCount, isCartOpen, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-[#101010] text-white font-manrope sticky top-0 z-50">
      <div className="container mx-auto px-6 py-6 border-b border-white/10 flex items-center justify-between relative">
        {/* Hamburger menu */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden"
          aria-label="Open menu"
        >
          <img src="../assets/shared/tablet/icon-hamburger.svg" alt="Menu" />
        </button>

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src="../assets/shared/desktop/logo.svg" alt="Audiophile Logo" className="h-6" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 uppercase text-sm tracking-widest mx-auto">
          <NavLink to="/" end className="hover:text-[#D87D4A]">
            Home
          </NavLink>
          <NavLink to="/category/headphones" className="hover:text-[#D87D4A]">
            Headphones
          </NavLink>
          <NavLink to="/category/speakers" className="hover:text-[#D87D4A]">
            Speakers
          </NavLink>
          <NavLink to="/category/earphones" className="hover:text-[#D87D4A]">
            Earphones
          </NavLink>
        </nav>

        {/* Cart icon */}
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="relative"
          aria-label="Cart"
        >
          <img src="../assets/shared/desktop/icon-cart.svg" alt="Cart" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#D87D4A] text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white text-black">
          <div className="px-6 py-8 space-y-6">
            <Link
              to="/category/headphones"
              className="flex justify-between items-center border-b pb-4 uppercase tracking-wide font-bold"
              onClick={closeMobileMenu}
            >
              <span>Headphones</span>
              <img src="../assets/shared/desktop/icon-arrow-right.svg" alt="Go" />
            </Link>
            <Link
              to="/category/speakers"
              className="flex justify-between items-center border-b pb-4 uppercase tracking-wide font-bold"
              onClick={closeMobileMenu}
            >
              <span>Speakers</span>
              <img src="../assets/shared/desktop/icon-arrow-right.svg" alt="Go" />
            </Link>
            <Link
              to="/category/earphones"
              className="flex justify-between items-center border-b pb-4 uppercase tracking-wide font-bold"
              onClick={closeMobileMenu}
            >
              <span>Earphones</span>
              <img src="../assets/shared/desktop/icon-arrow-right.svg" alt="Go" />
            </Link>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {isCartOpen && <CartModal />}
    </header>
  );
}
