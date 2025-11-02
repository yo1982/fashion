import React from 'react';

const Hero: React.FC = () => {
  const handleShopNowClick = () => {
    document.getElementById('product-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full text-white bg-stone-800">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-sm md:text-base tracking-widest uppercase mb-2">Summer Collection 2024</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-tight">
          The Essence of Summer
        </h1>
        <button
          onClick={handleShopNowClick}
          className="mt-8 px-10 py-3 border border-white text-sm font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-sm hover:bg-white hover:text-stone-900 transition-all duration-300"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;