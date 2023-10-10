'use client'
import React, { useState, useEffect } from 'react';
import Nav from "../components/nav";

const Cart = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart data from local storage when the component mounts
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }

    // Listen for changes in local storage and update the cart
    const updateCartFromLocalStorage = (event) => {
      if (event.key === 'cart') {
        const newCart = JSON.parse(event.newValue);
        setCart(newCart);
      }
    };

    window.addEventListener('storage', updateCartFromLocalStorage);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('storage', updateCartFromLocalStorage);
    };
  }, []);

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    // Update local storage when the cart changes
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <div className="bg-gray-100 p-4">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cart.map((item) => (
              <div className="bg-white rounded-lg overflow-hidden shadow-md" key={item.id}>
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">${item.newPrice}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
