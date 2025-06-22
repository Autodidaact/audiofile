import React from 'react';
import { Link } from 'react-router-dom';


export default function CategoryList(){
  const categories = [
    {
      name: 'headphones',
      image: "./assets/shared/desktop/image-category-thumbnail-headphones.png"
    },
    {
      name: 'speakers',
      image: "./assets/shared/desktop/image-category-thumbnail-speakers.png"
    },
    {
      name: 'earphones',
      image: "./assets/shared/desktop/image-category-thumbnail-earphones.png"
    },
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.name} className="bg-gray-100 rounded-lg pt-16 pb-6 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <img
                src={category.image}
                alt={category.name}
                className="h-32 object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg mb-4">
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              </h3>
              <Link
                to={`/category/${category.name}`}
                className="inline-flex items-center gap-2 text-gray-500 hover:text-primary"
              >
                <span>Shop</span>
                <img
                  src="./assets/shared/desktop/icon-arrow-right.svg"
                  alt=""
                  className="w-2 h-3"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

