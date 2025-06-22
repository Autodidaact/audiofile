import React from 'react';

export default function ProductFeatures({ features, includes }){
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
      <div>
        <h2 className="text-2xl font-bold mb-6">FEATURES</h2>
        <div className="text-gray-500 whitespace-pre-line">
          {features}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-6">IN THE BOX</h2>
        <ul className="space-y-2">
          {includes.map((item, index) => (
            <li key={index} className="flex">
              <span className="text-primary font-bold mr-4">{item.quantity}x</span>
              <span className="text-gray-500">{item.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

