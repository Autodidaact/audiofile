import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
  return (
      <ProductsProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
          <ScrollToTop />
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/product/:slug" element={<ProductPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </ProductsProvider>
  );
};

export default App;

