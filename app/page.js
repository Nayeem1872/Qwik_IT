'use client'

import Hero from "./components/Hero";
import Nav from "./components/nav";
import { useState } from "react";
import Products from "./Products/Products";
import products from "./db/data";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Home() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice,id }) => (
        <Card
          id={id}
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
  {products.map((product) => (
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
  ))}
  

  const result = filteredData(products, selectedCategory, query);

  
  return (
    <>
   <Nav query={query} handleInputChange={handleInputChange}/>
   
   <Hero/>
  
   <div >

   <Sidebar handleChange={handleChange} />
     
      {/* <Recommended handleClick={handleClick} /> */}
      <Products result={result} />
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
   
    </>
  )
}
