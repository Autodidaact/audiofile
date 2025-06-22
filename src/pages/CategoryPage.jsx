import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext';

export default function CategoryPage(){
  const { category } = useParams();
  const { getProductsByCategory, loading } = useProducts();
  const products = getProductsByCategory(category);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="bg-black text-white py-8 mb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-center uppercase">
          {category}
        </h1>
      </div>

      <div className="space-y-32">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-8 lg:gap-32 items-center`}
          >
            <div className="lg:w-1/2">
              <img
                src={product.categoryImage.desktop}
                alt={product.name}
                className="w-full rounded-lg"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              {product.new && (
                <span className="text-primary text-sm tracking-widest mb-4 block">
                  NEW PRODUCT
                </span>
              )}
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {product.name}
              </h2>
              <p className="text-gray-500 mb-6">{product.description}</p>
              <Link to={`/product/${product.slug}`}>
                <button className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 uppercase text-xs tracking-wider">
                  See Product
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



