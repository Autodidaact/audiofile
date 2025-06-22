import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoryList from '../components/Category/CategoryList';
import ProductCard from '../components/Product/ProductCard';
import { useProducts } from '../context/ProductsContext';

export default function HomePage() {
  const { products } = useProducts();
  const featuredProducts = products.filter(product => product.new).slice(0, 3);

  return (
    <div className="bg-[#FAFAFA]">
      <HeroSection />

      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <CategoryList />
    </div>
  );
}
