import React from 'react'
import { ourMenu } from './Data'

const Menu = () => {
  return (
    <section id='menu' className="w-full h-full relative bg-gray-100 py-10">
        <div className="w-full h-full overflow-auto  mx-auto flex flex-col justify-center relative">
            <h3 className="text-4xl text-center font-bold my-6 text-gray-800">Our Menu</h3>
            <div className="w-full my-8 md:w-11/12 m-auto relative">
                <div id="menuCard" className="grid w-full md:grid-cols-3 lg:grid-cols-4 grid-flow-row space-y-3 space-x-2 gap-4 p-2 place-content-center">
                    {ourMenu.map((item) => {
                        const {img, id, desc, tittle} = item
                        return ( 
                            <div id="food" key={id} data-id={id} className="w-full rounded-lg shadow-lg text-center cursor-pointer bg-gray-50 transform hover:bg-white transition-all ease-in-out duration-200">
                                <div className="flex flex-col justify-between gap-0">
                                    <div className="w-full">
                                        <img id="foodImg" className="w-full h-60 object-fit aspect-square object-center rounded-lg" src={img} alt={item.tittle} />
                                    </div>
                                    <div className="md:w-11/12 lg:w-full p-2">
                                        <h3 id="title" className="text-xl text-left font-bold text-gray-800 uppercase">{tittle}</h3>
                                        <p id="desc" className="text-justify text-base md:text-lg p-1">{desc}.</p>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                </div>
                <div id="noitemfound" className="hidden p-2 w-full">
                    <h1 className="text-3xl text-red-200 grid-2 text-center">
                        NO ITEM FOUND
                    </h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu