import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../../context/ProductsContext';
import { useCart } from '../../context/CartContext';
import Button from '../UI/Button';
import QuantitySelector from '../UI/QuantitySelector';
import ProductFeatures from './ProductFeatures';
import ProductGallery from './ProductGallery';
import RelatedProducts from './RelatedProducts';
export default function ProductDetail(){
  const { slug } = useParams();
  const { getProductBySlug } = useProducts();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = getProductBySlug(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };
  console.log(product);

  return (
    <div className="container mx-auto px-6 py-16">
      <Link
        to={`/category/${product.category}`}
        className="inline-block mb-14 text-gray-500 hover:text-primary"
      >
        Go Back
      </Link>

      <div className="flex flex-col lg:flex-row gap-8 mb-24">
        <div className="lg:w-1/2">
          <img
            src={product.image.desktop}
            alt={product.name}
            className="w-full rounded-lg"
          />
        </div>

        <div className="lg:w-1/2 lg:pl-16 flex flex-col justify-center">
          {product.new && (
            <span className="text-primary text-sm tracking-widest mb-4">
              NEW PRODUCT
            </span>
          )}
          <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
          <p className="text-gray-500 mb-6">{product.description}</p>
          <p className="text-lg font-bold mb-8">$ {product.price.toLocaleString()}</p>

          <div className="flex items-center gap-4">
            <QuantitySelector
              quantity={quantity}
              onDecrease={() => setQuantity(prev => Math.max(1, prev - 1))}
              onIncrease={() => setQuantity(prev => prev + 1)}
            />
            <Button variant="primary" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <ProductFeatures features={product.features} includes={product.includes} />
      <ProductGallery gallery={product.gallery} />
      <RelatedProducts others={product.others} />
    </div>
  );
};


