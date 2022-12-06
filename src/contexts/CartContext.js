import React, { createContext,useState, useEffect} from 'react'
import { ourMenu } from '../Data'

export const CartContext = createContext()

const CartProvider = ({children}) => {
  const [localFood, setLocalFood] = useState([])
  useEffect(() =>{
    const four = ourMenu.filter((items, index) => index <= 4)
    console.log(four)
    setLocalFood(()=> four)
  },[])
  return (
    <CartContext.Provider value={{localFood}}>{children}</CartContext.Provider>
  )
}

export default CartProvider