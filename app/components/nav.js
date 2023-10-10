"use client"
import { MdLocalShipping } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';


import './nav.css';

const Nav = ( { handleInputChange, query } ) => {
  return (
    <>
      <div className='header'>
       
        <div className='mid_header'>
          <div className='logo'>
          <img src='/image/logo.webp' alt='Logo' />

          </div>
          <div className='search_box'>
            <input
              type='text'
              onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
            ></input>
            <button >
              <AiOutlineSearch />
            </button>
          </div>
        </div>
        <div className='last_header'>
          <div className='user_profile'></div>
          <div className='nav'>
            <ul>
              <li>
                <Link className='link' href='/' passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link  className='link' href='/shop' passHref>
                  Shop
                </Link>
              </li>
              <li>
                <Link  className='link' href='/cart'>
                  Cart
                </Link>
              </li>
              <li>
                <Link  className='link'  href='/about' passHref>
                  About
                </Link>
              </li>
              <li>
                <Link  className='link' href='/contact' passHref>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className='offer'>
            <p>flat 10% over all iPhone</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
