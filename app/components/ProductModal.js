import React from "react";
import Card from "./Card";

const ProductModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;
  <Card
  key={product.id}
  img={product.img}
  title={product.title}
  star={product.star}
  reviews={product.reviews}
  prevPrice={product.prevPrice}
  newPrice={product.newPrice}
  id={product.id}
/>

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={product.img} alt={product.title} />
        <h2>{product.title}</h2>
        <p>Price: {product.newPrice}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default ProductModal;
