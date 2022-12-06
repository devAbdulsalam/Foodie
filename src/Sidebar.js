import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// import icons
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';

// import sidebar context
import { SidebarContext } from './contexts/SidebarContext';

// import cart context
import { BasketContext } from './contexts/BasketContext';

// import FoodItem
import FoodItem from './FoodItem';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { foodBasket, itemAmount, total, clearBasket} = useContext(BasketContext);

  const handlePayment = () =>{
         console.log("pay for goods")
		}
  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      }  w-full bg-white fixed top-0 h-full shadow-2xl z-[900] md:w-[35vw] xl:max-w-[30vw] transition-all duration-300  px-4 lg:px-[35px]`}
    >   <p className='py-8'>Sidebar</p>
        <div className='flex items-center justify-between py-6 border-b'>
            <h2 className='uppercase text-sm font-semibold text-green-600'>
            Food Basket ({itemAmount})
            </h2>
            {/* icon */}
            <div
            onClick={handleClose}
            className='cursor-pointer w-8 h-8 flex justify-center items-center'
            >
            <IoMdArrowForward className='text-2xl' />
            </div>
        </div>
        <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
          {foodBasket.map((item) => {
            return <FoodItem Food={item} key={item.id} />;
          })}
        </div>
        <div className='p-2 text-center flex w-full justify-between items-center'>
            {/* total */}
          <p id="" className="font-semibold text-2xl">
            Total <span className="text-green-500">&#8358; {total}</span>
          </p>
          {/* clear cart icon */}
            <button
              onClick={clearBasket}
              className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'
            >
              <FiTrash2 />
            </button>
        </div>
        <div className='flex flex-col gap-y-3 mt-4 py-2'>
        <Link
          to='/'
          onClick={()=> handlePayment()}
          className='bg-green-500 flex p-4 justify-center items-center text-white w-full font-medium'
        >
          Order Food
        </Link>
      </div>
						
      
      </div>
  )
}

export default Sidebar