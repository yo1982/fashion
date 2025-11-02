import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const handleClick = () => {
    onAddToCart(product);
  };

  return (
    <div className="group text-center cursor-pointer" onClick={handleClick}>
      <div className="relative overflow-hidden aspect-[4/5] bg-stone-100">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
        />
        <img 
          src={product.hoverImageUrl} 
          alt={`${product.name} alternate view`} 
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-base text-stone-800 font-medium tracking-wide">{product.name}</h3>
        <p className="text-sm text-stone-500 mt-1">{product.category}</p>
        <p className="text-base text-stone-900 font-semibold mt-1">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
