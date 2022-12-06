import React, { useState, useContext} from 'react'
import { ourMenu } from './Data'
import { useNavigate, useParams, Link } from 'react-router-dom';
import { BasketContext } from "./contexts/BasketContext"
import Sidebar from './Sidebar';
import Nav from "./Navbar"
import Footer from "./Footer"
import Rating from "./Rating"
import OrderFood from "./OrderFood"
const PreviewFood = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {addToBasket} = useContext(BasketContext)
    const [basketSucessfull, setBasketSucessfull] = useState(false)

    const singleFood = ourMenu.find(item => item.id === parseInt(id))
    const {tittle, img, desc, price, rating} = singleFood
    const [myOrder, setMyOrder] = useState(false)
    const [plate, setPlate] = useState('1')
        
    //  saveContactToLocalStorage

    const food = {id, tittle, img, plate, price} 
    const toggleBasket = () =>{        
        setBasketSucessfull(true)
        setTimeout(() => {
            setBasketSucessfull(false)
        }, 500);

    }
    
    const handleOrder = () =>{
         setMyOrder(!myOrder)
    }
    return (
    <div className="h-screen overflow-auto">
        <Nav />
        <Sidebar/>
            <section className="bg-black bg-opacity-20  w-full">
                <div className="fixed z-[100] top-10 mt-10 flex justify-between w-full md:px-20 mx-auto p-4">
                    <h2 className="text-2xl md:text-4xl text-green-600 font-bold capitalize">{tittle}</h2>
                    <nav className="flex justify-content-end">
                        <ol className="hidden md:flex justify-content-end items-center gap-1 text-lg md:text-xl">
                            <li className="text-lg md:text-xl font-bold py-2 text-blue-500  hover:text-blue-600"><Link to="/">Home</Link></li>
                            <i className="fa fa-chevron-right"></i>
                            <li className="text-lg md:text-xl font-bold py-2 text-blue-500  hover:text-blue-600"><Link to="/menus">Menus</Link></li>
                            <i className="fa fa-chevron-right"></i>
                            <li className="text-lg md:text-xl font-bold py-2">{tittle.slice(0, 10)}</li>
                        </ol>
                    </nav>
                </div>
                <div className="text-lg bg-white w-full p-3 md:p-10 mt-20">
                    <div className="flex mt-10 md:w-10/12 mx-auto flex-wrap">
                        <img src={img} alt="Foodimg" className="lg:w-1/2 w-full lg:h-auto max-h-96 h-40 object-cover object-center rounded"/>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-3 lg:mt-0">
                            <div className="flex mb-4 justify-between px-2">
                                <h2 className="text-3xl text-green-600 font-bold capitalize">{tittle}</h2>
                                <span id="prevPrice" className="title-font font-medium text-2xl text-gray-900">
                                    &#8358;{price}
                                </span>
                            </div>
                            <p className="md:text-xl leading-relaxed">
                                {desc}
                            </p>
                            <div className="flex my-3 justify-between items-center pb-2 border-b-2 border-gray-100">
                                <Rating value={rating}/>   
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Plates</span>
                                    <div className="relative">
                                        <select
                                            value={plate} onChange={(e) => setPlate(e.target.value)} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                                        >
                                            <option value="1">1</option>
                                            <option  value="2" >2</option>
                                            <option  value="3" >3</option>
                                            <option value="4">4</option>
                                        </select>
                                        <span
                                            className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"
                                        >
                                            <i className='fa fa-chevron-down'></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-end">
                                <button	onClick={() => navigate(-1)} className="flex ml-auto text-white font-semibold bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded">
                                    Back
                                </button>
                                <button	onClick={handleOrder} className="flex ml-auto text-white font-semibold bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded">
                                    Order
                                </button>
                                <button	onClick={() => {
                                    addToBasket(id, food)
                                    toggleBasket()
                                    }} className="flex ml-auto text-white font-semibold bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded">
                                    Add to Basket
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {basketSucessfull ?
             <div className="bg-black bg-opacity-20 absolute w-full h-screen top-0 duration-500 z-50">
				<div className="flex place-items-center w-full h-full p-1">
					<div className="mx-auto">
						<h5 className="text-center text-white font-semibold text-xl">
							Added to basket Successfully
						</h5>
					</div>
				</div>
			</div> : ""}
            {myOrder ? <OrderFood setMyOrder={setMyOrder} myOrder={myOrder} food={food}/> : ""}
            <Footer/>
    </div>
  )
}

export default PreviewFood