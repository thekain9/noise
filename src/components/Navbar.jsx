import React, { useState } from 'react';
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';
import { useSelector } from 'react-redux';
import CartPopup from './CartPopup';

const Navbar = () => {
  const [showCartPopup, setShowCartPopup] = useState(false);
  const cartItemsCount = useSelector((state) => state.cart.items.length);

  const handleMouseEnter = () => {
    setShowCartPopup(true);
  };

  const handleMouseLeave = () => {
    setShowCartPopup(false);
  };

  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <img src={appleImg} alt="Apple logo" width={40} height={40} />
        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav, i) => (
            <div key={i} className='px-5 text-sm cursor-pointer text-steelGrey hover:text-white transition-all'>
              {nav}
            </div>
          ))}
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} alt='Search icon' width={25} height={25} />
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Cart Icon with Item Count */}
            <div className="relative cursor-pointer">
              <img src={bagImg} alt='Cart icon' width={25} height={25} />
              {cartItemsCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </div>

            {/* Conditionally render the CartPopup on hover */}
            {showCartPopup && (
              <div
                className="absolute right-0 mt-2 w-80 bg-white shadow-lg border rounded-lg z-50 p-4"
              >
                <CartPopup />
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;



