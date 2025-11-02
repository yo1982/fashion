import React, { useState } from 'react';
import { SearchIcon, UserIcon, ShoppingBagIcon, MenuIcon, XIcon, ChevronDownIcon } from './icons/Icons';

const NavLink: React.FC<{ children: React.ReactNode; hasDropdown?: boolean; onClick?: () => void, isActive: boolean }> = ({ children, hasDropdown, onClick, isActive }) => (
  <button onClick={onClick} className={`group flex items-center text-sm font-medium tracking-wider uppercase transition-colors duration-300 bg-transparent border-none ${isActive ? 'text-stone-900' : 'text-stone-700 hover:text-stone-900'}`}>
    {children}
    {hasDropdown && <ChevronDownIcon className="ml-1 h-4 w-4 text-stone-500 group-hover:text-stone-800" />}
  </button>
);


const Header: React.FC<{ 
  onNavigate: (category: string) => void; 
  activeCategory: string;
  cartItemCount: number;
  onToggleCart: () => void;
}> = ({ onNavigate, activeCategory, cartItemCount, onToggleCart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleIconClick = (iconName: string) => {
    alert(`${iconName} functionality is not implemented in this demo.`);
  };

  const handleNav = (category: string) => {
    onNavigate(category);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  const navItems = [
    { label: 'New In', category: 'All' },
    { label: 'Shoes', category: 'Shoes' },
    { label: 'Clothing', category: 'Clothing' },
    { label: 'Accessories', category: 'Accessories' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-stone-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-stone-600 hover:text-stone-900" aria-label="Toggle menu">
              {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0">
            <button onClick={() => handleNav('All')} className="text-3xl font-serif tracking-widest text-stone-800 bg-transparent border-none">
              AURELIEN
            </button>
          </div>

          <nav className="hidden lg:flex lg:gap-8">
            {navItems.map(item => (
              <NavLink key={item.category} hasDropdown onClick={() => handleNav(item.category)} isActive={activeCategory === item.category}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4 sm:gap-6">
            <button onClick={() => handleIconClick('Search')} className="p-2 text-stone-600 hover:text-stone-900 transition-colors duration-300" aria-label="Search"><SearchIcon className="h-5 w-5" /></button>
            <button onClick={() => handleIconClick('User Account')} className="p-2 text-stone-600 hover:text-stone-900 transition-colors duration-300" aria-label="Account"><UserIcon className="h-5 w-5" /></button>
            <button onClick={onToggleCart} className="relative p-2 text-stone-600 hover:text-stone-900 transition-colors duration-300" aria-label="Shopping bag">
              <ShoppingBagIcon className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-stone-800 text-white text-xs font-medium flex items-center justify-center" style={{transform: 'translate(30%, -30%)'}}>
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white">
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map(item => (
              <NavLink key={item.category} hasDropdown onClick={() => handleNav(item.category)} isActive={activeCategory === item.category}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
