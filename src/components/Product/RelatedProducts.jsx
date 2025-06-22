import React from 'react';
import { Link } from 'react-router-dom';

export default function RelatedProducts({ others }){
  return (
    <div className="text-center mb-24">
      <h2 className="text-2xl font-bold mb-10">YOU MAY ALSO LIKE</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {others.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={product.image.desktop}
              alt={product.name}
              className="w-full max-w-xs mb-8 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-6">{product.name}</h3>
            <Link to={`/product/${product.slug}`}>
              <button className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 uppercase text-xs tracking-wider">
                See Product
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

