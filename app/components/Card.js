'use client'
import { BsFillBagFill } from "react-icons/bs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import { useState, useEffect } from "react";
import data from "../db/data";
import { toast } from 'react-toastify';

const Cards = ({ img, title, star, reviews, prevPrice, newPrice, id }) => {
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = () => {
    if (productDetails) {
      const updatedCart = [...cart, productDetails];
      setCart(updatedCart);
      // Update local storage when the cart changes
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    
     // Show a success notification
    }
    toast.success('Item added to cart', {
     position: 'top-right',
   });
  };
  console.log(cart)

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
    

  }, []);
 
  // Save cart data to local storage whenever the cart changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);


  const [isOpen, setIsOpen] = useState(false);
  const [productDetails, setProductDetails] = useState(null);

  const showDetail = (productId) => {
   

    const product = data.find((product) => product.id === productId);

   

    if (product) {
      setProductDetails(product);
      setIsOpen(true);
    }
  };
  console.log(productDetails);

  return (
    <>
      <Dialog>
        <DialogTrigger onClick={() => showDetail(id)}>
          <section className="card">
            <img src={img} alt={title} className="card-img" />
            <div className="card-details">
              <h3 className="card-title">{title}</h3>
              <section className="card-reviews">
                {star} {star} {star} {star}
                <span className="total-reviews">{reviews}</span>
              </section>
              <section className="card-price">
                <div className="price">
                  <del>{prevPrice}</del> {newPrice}
                </div>
              </section>
            </div>
               
          </section>
        </DialogTrigger>
        {/* <div className="bag flex">
  <BsFillBagFill
    onClick={() => addToCart(productDetails)}
    className="bag-icon cursor-pointer text-white"
  />

</div> */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Product Details</DialogTitle>
            <DialogDescription>
              <div className="modal-body">
                <img src={img} alt={title} className="card-img" />
                <p>Name: {title}</p>
                <div className="price">
                  Price:<del>{prevPrice}</del> {newPrice}
                </div>
                <div className="bag flex cursor-pointer gap-2">
                  Add to cart
                  <BsFillBagFill
                    onClick={() => addToCart(productDetails)} // Pass productDetails to addToCart
                    className="bag-icon"
                  />
                </div>
                {/* Include other product details */}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Cards;
