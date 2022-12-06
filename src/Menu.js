import React, {useState, useEffect} from 'react'
import { ourMenu, menuBtns } from './Data'
import { useNavigate, Link} from 'react-router-dom';
import Nav from "./Navbar"
import Sidebar from './Sidebar';
import Footer from "./Footer"

const Menu = () => {
    const navigate = useNavigate()
    const [searchInput, setSearchInput] = useState()
    const [food, setFood] = useState([])
    const [noItem, setNoItem] = useState(false)

    useEffect(() => {
        let fiveStarFood = ourMenu.filter((fiveStar) => fiveStar.rating === 5)
        setFood(() => fiveStarFood)
    },[])

    const searchFoods = () =>{
        const value = searchInput
        let searchedItem = ourMenu.filter(menuItem => {
            if (menuItem.category.toLowerCase().includes(value) ||
                menuItem.tittle.toLowerCase().includes(value) ||
                menuItem.desc.toLowerCase().includes(value) ||
                menuItem.price === (value)||
                menuItem.rating === (value)) {
                return menuItem;
            }else{
                setNoItem(true)
            }
            return menuItem;
        });        
        setFood(() => searchedItem)
    }
    const filterFood =(name)=>{
        if(name){
            console.log(name)
            let Food = ourMenu.filter((item) => item.category === name.toLowerCase())
            setFood(() => Food)
        }
    }
    //  const closeWelcome = () => {
    //     setIsOpen(false)
    //     setTimeout(() => {
    //         navigate("/index")
            
    //     }, 100);
    // }
  return (
    <div className="">
      <Nav />
      <Sidebar />
        <section className="w-full h-full relative bg-white py-16">
            <div className="w-full bg-gray-100 mt-10 fixed top-0 z-[100] md:top-10 ">
                <div className="flex flex-col md:flex-row justify-between items-center  mx-auto md:px-10 py-4">
                    <h2 className="text-xl md:text-4xl text-green-600 text-center font-bold">Our Menu</h2>
                    <div className=" lg:w-4/6 text-center text-xs lg:text-lg mx-auto  lg:flex justify-center items-center flex-wrap gap-2 space-x-4 space-y-2">
                        <div >
                            {menuBtns.map((item) => {
                                return (
                                    <button
                                        className="inline-block px-6 mx-1  py-2.5 bg-green-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                                        type="button"
                                        key={item.id}
                                        onClick={() => filterFood(item.name)}

                                    >
                                        {item.name}
                                    </button>
                                )})}
                        </div>
                        <div className="input-group relative flex items-stretch  border-gray-50 rounded transition ease-in-out focus:text-gray-700">
                            <input
                                value={searchInput}
                                onInput={(e)=> setSearchInput(e.target.value.toLowerCase())}
                                type="text"
                                className="px-2 py-2 text-lg w-80 min-w-[250px] bg-white font-normal text-green-600 bg-clip-padding border-0 border-green-300 rounded transition ease-in-out m-0"
                                placeholder="Search"
                            />
                            <button
                                onClick={searchFoods}
                                className="btn inline-block absolute right-0 h-[95%] px-5 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out "
                                type="button"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="search"
                                    className="w-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <nav className="hidden md:inline-flex">
                        <ol className="list-reset flex justify-center items-center gap-2">
                            <li className="text-lg md:text-xl font-bold py-2 text-green-500  hover:text-green-600">
                                <Link to="/">Home</Link>
                                </li>
                            <i className="fa fa-chevron-right"></i>
                            <li className="text-lg md:text-xl  font-bold py-2">Menus</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="w-full h-full overflow-auto mx-auto flex flex-col mt-20 justify-center relative">
                <div className="w-full my-8 md:w-11/12 m-auto relative">
                    <div id="menuCard" className="grid w-full md:grid-cols-3 lg:grid-cols-4 grid-flow-row space-y-3 space-x-2 gap-4 p-2 place-content-center">
                        {food.map((item) => {
                            const {img, id, desc, tittle, price} = item
                            return ( 
                                <div key={id} data-id={id} onClick={()=> navigate(`/menus/${id}`)} className="w-full pb-5 rounded-lg shadow-lg text-center cursor-pointer bg-gray-50 transform hover:bg-white transition-all ease-in-out duration-200">
                                    <div className="flex flex-col justify-between gap-0">
                                        <div className="w-full">
                                            <img id="foodImg" className="w-full h-60 object-fit aspect-square object-center rounded-lg" src={img} alt={item.tittle} />
                                        </div>
                                        <div className="md:w-11/12 lg:w-full p-2">
                                            <h3 id="title" className="text-xl text-left font-bold text-gray-800 uppercase">{tittle}</h3>
                                            <p id="desc" className="text-justify text-base md:text-lg p-1">{desc.slice(0, 150)}..</p>
                                        </div>
                                    </div>
                                    <div className="w-full px-3 flex justify-between items-center">
                                        <span className="text-xl font-semibold">Price: <strong className="price">&#8358;{price}</strong></span>
                                        <Link to={`/menus/${id}`} className="py-1 px-3 text-lg bg-green-500 hover:bg-green-600 rounded-md">Details &#8594;</Link>
                                    </div>
                                </div>
                                )
                            })}
                    </div> 
                    {noItem ? 
                    <div id="noitemfound" className="debug p-2 w-full py-8">
                        <h1 className="text-3xl text-red-400 grid-2 mt-10 text-center">
                            NO ITEM FOUND
                        </h1>
                    </div> : console.log("items are available")}
                </div>
            </div>
        </section>
      <Footer />
    </div>
  )
}

export default Menu