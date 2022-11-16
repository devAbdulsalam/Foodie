import React from 'react'

const PreviewFood = () => {
  return (
        <section id="previewFood" className="bg-black bg-opacity-20 absolute w-full h-full top-0 left-0 duration-500 z-50 hidden">
            <div className="flex place-items-center w-full h-full">
                <i id="close" className="fa fa-times text-gray-700 text-2xl float-right cursor-pointer"></i>
                <div className="text-lg bg-white w-11/12 mx-auto p-4 rounded-md shadow-md">
                    <div className="mx-auto flex flex-wrap">
                        <img src="" alt="Foodimg" className="lg:w-1/2 w-full lg:h-auto h-40 object-cover object-center rounded"/>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-3 lg:mt-0">
                            <div className="flex mb-4 justify-between px-2">
                                <h2 id="foodTitle" className="text-xl text-green-600 font-bold">
                                    Delicious Food
                                </h2>
                                <span id="prevPrice" className="title-font font-medium text-xl text-gray-900">
                                    $58.00 
                                </span>
							</div>
                            <p id="fullDisc" className="leading-relaxed">
                                Everyday eat what is good and be healthy, remember what You
                                eat is what You are.
                            </p>
                            <div className="flex my-3 justify-between items-center pb-2 border-b-2 border-gray-100">
                                <div className="flex items-center">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                        ></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                        ></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                        ></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                        ></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Plates</span>
                                    <div className="relative">
                                        <select
                                            className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                        <span
                                            className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"
                                        >
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                className="w-4 h-4"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-end">
                                <button	id="addToBasket" className="flex ml-auto text-white font-semibold bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded">
                                    Add to basket
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default PreviewFood