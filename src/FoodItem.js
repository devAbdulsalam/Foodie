import React, { useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
// import cart context
import { BasketContext } from './contexts/BasketContext';
import { SidebarContext } from './contexts/SidebarContext';

const FoodItem = ({Food}) => {
  const { removeFromBasket, increaseAmount, decreaseAmount } = useContext(BasketContext);
  
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  // destructure item
  const {tittle, id, img, price, plate} = Food
  return (
    <div className='flex gap-x-4 py-2 lg:px-4 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* image */}
        <div onClick={() => setIsOpen(!isOpen)} className=''>
        <Link to={`/menus/${id}`}>
          <img className='max-w-[90px] h-[90px]' src={img} alt='' />
        </Link>
        </div><div className='w-full flex flex-col  h-full justify-evenly'>
          {/* title & remove icon */}
          <div className='flex justify-between mb-2'>
            <div onClick={() => setIsOpen(!isOpen)} className=''>
                {/* title */}
                <Link
                 to={`/menus/${id}`}
                 className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'
                >
                    {tittle}
                </Link>
            </div>
            {/* remove icon */}
            <div
              onClick={() => removeFromBasket(id)}
              className='text-xl cursor-pointer'
            >
              <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
            </div>
          </div>
          <div className='flex gap-x-2 h-[36px] text-sm'>
            {/* qty */}
            <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
              {/* minus icon */}
              <div
                onClick={() => decreaseAmount(id)}
                className='flex-1 flex justify-center items-center cursor-pointer h-full'
              >
                <IoMdRemove />
              </div>
              {/* plate */}
              <div className='h-full flex justify-center items-center px-2'>
                {plate}
              </div>
              {/* plus icon */}
              <div
                onClick={() => increaseAmount(id)}
                className='flex-1 h-full flex justify-center items-center cursor-pointer'
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className='flex-1 flex items-center justify-around'>
              &#8358;{price}
            </div>
            {/* final price */}
            {/* make the price at 2 decimals */}
            <p className='flex-1 flex justify-end items-center text-primary font-medium'>&#8358; {price * Number(plate)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem
