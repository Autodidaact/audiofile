import { createContext, useContext, useEffect, useState } from 'react';
import data from '../data/data.json';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      // Fix image paths by ensuring they're relative to public folder
      const processedData = data.map(product => ({
        ...product,
        image: fixImagePaths(product.image),
        categoryImage: fixImagePaths(product.categoryImage),
        gallery: {
          first: fixImagePaths(product.gallery.first),
          second: fixImagePaths(product.gallery.second),
          third: fixImagePaths(product.gallery.third)
        },
        others: product.others.map(other => ({
          ...other,
          image: fixImagePaths(other.image)
        }))
      }));
      
      setProducts(processedData);
      setLoading(false);
    }, 500);
  }, []);

  // Helper function to fix image paths
  const fixImagePaths = (imageObj) => {
    return {
      mobile: imageObj.mobile.replace(/^\.\//, '/'),
      tablet: imageObj.tablet.replace(/^\.\//, '/'),
      desktop: imageObj.desktop.replace(/^\.\//, '/')
    };
  };

  const getProductBySlug = (slug) => {
    return products.find(product => product.slug === slug);
  };

  const getProductsByCategory = (category) => {
    return products.filter(product => product.category === category);
  };

  return (
    <ProductsContext.Provider value={{ products, loading, getProductBySlug, getProductsByCategory }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);