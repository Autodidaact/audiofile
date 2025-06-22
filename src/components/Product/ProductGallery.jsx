import React from 'react';

export default function ProductGallery({ gallery }){
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-24">
      <div className="md:col-span-2">
        <img
          src={gallery.first.desktop}
          alt="Product gallery 1"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="md:col-span-2">
        <img
          src={gallery.second.desktop}
          alt="Product gallery 2"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="md:col-span-4">
        <img
          src={gallery.third.desktop}
          alt="Product gallery 3"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

