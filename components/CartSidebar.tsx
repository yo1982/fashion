import React from 'react';
import { CartItem } from '../types';
import { XIcon, TrashIcon, PlusIcon, MinusIcon } from './icons/Icons';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemove: (productId: number) => void;
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity }) => {
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('€', ''));
      return total + price * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-heading"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-stone-200">
            <h2 id="cart-heading" className="text-xl font-serif text-stone-800">Your Bag</h2>
            <button onClick={onClose} className="p-2 text-stone-500 hover:text-stone-900" aria-label="Close cart">
              <XIcon className="h-6 w-6" />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex-grow flex items-center justify-center text-center text-stone-500 px-6">
              <p>Your shopping bag is empty.</p>
            </div>
          ) : (
            <div className="flex-grow overflow-y-auto">
              <ul className="divide-y divide-stone-200">
                {cartItems.map(item => (
                  <li key={item.id} className="flex p-6 space-x-4">
                    <img src={item.imageUrl} alt={item.name} className="h-24 w-24 object-cover" />
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-base font-medium text-stone-800">{item.name}</h3>
                        <p className="text-sm text-stone-500">{item.category}</p>
                        <p className="text-base font-semibold text-stone-900 mt-1">{item.price}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-stone-200">
                          <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="p-2 text-stone-600 hover:bg-stone-100 disabled:opacity-50" aria-label="Decrease quantity" disabled={item.quantity <= 1}><MinusIcon className="h-4 w-4"/></button>
                          <span className="px-3 text-sm font-medium">{item.quantity}</span>
                          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="p-2 text-stone-600 hover:bg-stone-100" aria-label="Increase quantity"><PlusIcon className="h-4 w-4"/></button>
                        </div>
                        <button onClick={() => onRemove(item.id)} className="p-2 text-stone-500 hover:text-red-600" aria-label="Remove item">
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="p-6 border-t border-stone-200 bg-stone-50">
              <div className="flex justify-between text-base font-medium text-stone-900">
                <p>Subtotal</p>
                <p>€{calculateSubtotal()}</p>
              </div>
              <p className="mt-1 text-sm text-stone-500">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <button
                  onClick={() => alert('Checkout functionality is not yet implemented.')}
                  className="w-full bg-stone-800 text-white px-6 py-3 text-sm tracking-wider uppercase font-semibold hover:bg-stone-900 transition-colors duration-300"
                >
                  Checkout
                </button>
              </div>
              <div className="mt-4 text-center">
                 <button onClick={onClose} className="text-sm font-medium text-stone-600 hover:text-stone-900">
                  or <span className="underline">Continue Shopping</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
