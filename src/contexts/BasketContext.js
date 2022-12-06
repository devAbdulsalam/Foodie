import React, {useState, createContext, useEffect} from 'react'

export const BasketContext = createContext()


const BasketProvider = ({children}) => {
  // foodBasket state
  const [foodBasket, setFoodBasket] = useState([])
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // // total price state
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total = foodBasket.reduce((total, item) =>{
			return total + (item.price * Number(item.plate))
		}, 0);
    setTotal(total);
  }, [foodBasket]);
  
  // update item amount
  useEffect(() => {
    if (foodBasket) {
      const total = foodBasket.reduce((total, item) =>{
        return total +  Number(item.plate)
      }, 0);
      setItemAmount(total);
    }
  }, [foodBasket]);



  // add to foodBasket
  const addToBasket = (id, food) => {
   
    // check if the item is already in the Basket
    const cartItem = foodBasket.find((items) => items.id === id) 
     // if food item is already in the Basket
     if (cartItem) {
       const newCart = foodBasket.filter((items) => items.id !== id) 
       setFoodBasket([...newCart, food]);
    } else {
      setFoodBasket([...foodBasket, food]);
    }
  };

  // remove food from Basket
  const removeFromBasket = (id) => {
    const newCart = foodBasket.filter((item) => {
      return item.id !== id;
    });
    setFoodBasket(newCart);
  };


   // clear food Basket
  const clearBasket = () => {
    setFoodBasket([]);
  };
  return (
    <BasketContext.Provider value={{
      foodBasket,
      addToBasket,
      removeFromBasket,
      clearBasket,
      // increaseAmount,
      // decreaseAmount,
      itemAmount,
      total,
      }} >
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider