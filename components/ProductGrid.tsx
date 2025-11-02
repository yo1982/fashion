import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import { Product } from '../types';

const ProductGrid: React.FC<{ category: string; onAddToCart: (product: Product) => void; }> = ({ category, onAddToCart }) => {
  const filteredProducts = PRODUCTS.filter(product => {
    const pCategory = product.category.toLowerCase();
    if (category === 'All') return true;
    if (category === 'Shoes') {
      return pCategory.includes('shoes');
    }
    if (category === 'Clothing') {
      const clothingCategories = ['shirts', 'knitwear', 'polo shirts'];
      return clothingCategories.includes(pCategory);
    }
    if (category === 'Accessories') {
      const accessoryCategories = ['accessories', 'bags & leather'];
      return accessoryCategories.includes(pCategory);
    }
    return false;
  });

  return (
    <div className="bg-white" id="product-grid">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-serif text-stone-800 capitalize">{category === 'All' ? 'Bestsellers' : category}</h2>
          <p className="mt-2 text-stone-500">
             {category === 'All' ? 'Discover our most loved pieces.' : `Browse our collection of ${category.toLowerCase()}.`}
          </p>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        ) : (
           <div className="text-center py-16 text-stone-500">
            <p>There are no products in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
