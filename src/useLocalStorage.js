import { useState, useEffect} from 'react'

export const useLocalStorage = () => {
    const [basket, setBasket] = useState([])
    const getlocalStorage= () => {
        const fromLocal = JSON.parse(localStorage.getItem("foodBasket"));
        if (fromLocal === null) {
            return []
        } else {
            return fromLocal
        }
    }
    
    useEffect (() =>{
        setBasket(getlocalStorage())
    },[])
  return basket
}
