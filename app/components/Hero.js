import React from 'react';

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-96 relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h3 className="text-lg uppercase font-light">silver aluminum</h3>
          <h2 className="text-4xl uppercase font-bold mb-4">Nike shoes</h2>
          <p className="text-xl mb-6">30% off at your first order</p>
          <a
  href="/shop"
  className="md:hidden bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-2 px-6 rounded-full transition duration-300 ease-in-out uppercase text-lg font-semibold"
>
  Shop Now
</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
