import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';

export default function ProductCard({ product }){
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-full max-w-xs mb-8">
        <img
          src={product.categoryImage.desktop}
          alt={product.name}
          className="w-full h-auto rounded-lg"
        />
      </div>
      {product.new && (
        <span className="text-primary text-sm tracking-widest mb-4">
          NEW PRODUCT
        </span>
      )}
      <h3 className="text-2xl font-bold mb-6">{product.name}</h3>
      <p className="text-gray-500 mb-6">{product.description}</p>
      <Link to={`/product/${product.slug}`}>
        <Button variant="primary">See Product</Button>
      </Link>
    </div>
  );
};

