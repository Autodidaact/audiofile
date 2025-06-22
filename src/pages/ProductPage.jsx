import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext';
import ProductDetail from '../components/Product/ProductDetail';

export default function ProductPage(){
  const { slug } = useParams();
  const { getProductBySlug } = useProducts();
  const product = getProductBySlug(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetail product={product} />;
};

