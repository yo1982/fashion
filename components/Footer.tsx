import React, { useState } from 'react';

const FooterLink: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <a 
    href="#" 
    onClick={(e) => {
      e.preventDefault();
      alert(`Navigating to ${children}.\nThis is a demo link.`);
    }} 
    className="text-stone-500 hover:text-stone-900 transition-colors duration-300 text-sm"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <footer className="bg-stone-100 border-t border-stone-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          <div className="lg:col-span-2">
            <h3 className="text-lg font-serif mb-4">Stay in touch</h3>
            <p className="text-stone-500 text-sm mb-4">
              Receive updates on new arrivals, special offers and our latest news.
            </p>
            <form className="flex" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow p-3 text-sm border border-stone-300 focus:ring-1 focus:ring-stone-800 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email for newsletter"
              />
              <button type="submit" className="bg-stone-800 text-white px-6 py-3 text-sm tracking-wider uppercase font-semibold hover:bg-stone-900 transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-serif mb-4">Customer Service</h3>
            <div className="flex flex-col space-y-3">
              <FooterLink>Help Centre</FooterLink>
              <FooterLink>Contact Us</FooterLink>
              <FooterLink>Shipping</FooterLink>
              <FooterLink>Returns</FooterLink>
              <FooterLink>Size Guide</FooterLink>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-serif mb-4">About Aurelien</h3>
            <div className="flex flex-col space-y-3">
              <FooterLink>Our Story</FooterLink>
              <FooterLink>Smart Luxury</FooterLink>
              <FooterLink>Stores</FooterLink>
              <FooterLink>Sustainability</FooterLink>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-serif mb-4">Legal</h3>
            <div className="flex flex-col space-y-3">
              <FooterLink>Terms & Conditions</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Cookie Policy</FooterLink>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Aurelien. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
