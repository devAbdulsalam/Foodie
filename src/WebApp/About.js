import React from 'react'
import BgImage from "../assets/foods/bgimage.jpeg"

const About = () => {
  return (
    <section id="aboutUs" className="text-gray-700 bg-gray-200">
				<div className="md:w-11/12 lg:w-4/5 m-auto py-6 md:py-10">
					<div className="text-center md:max-w-xl lg:max-w-3xl mt-5 mx-auto">
						<h3 className="text-4xl font-bold mb-6 text-gray-800">Our Resturants</h3>
						<p className="pb-2 md:mb-12 md:pb-0 text-xl">
							We serve you Tasty and Delicious Meal Anytime, Anyday
						</p>
					</div>
					<div className="px-4 py-6 mx-auto first:lg:shadow-lg sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
						<div className="grid gap-5 row-gap-8 lg:grid-cols-2 ">
							<div className="md:hidden">
								<img className="object-cover w-full h-56 rounded shadow-lg sm:h-96" src="./images/004.jpeg" alt="" />
							</div>
							<div className="flex flex-col justify-center">
								<div className="max-w-xl mb-6">
									<h2 className="max-w-lg mb-6 font-sans text-xl text-center md:text-left lg:text-3xl font-bold tracking-wide text-gray-900 sm:text-4xl sm:leading-none md:leading-10">
									We serve you Tasty and Delicious meal
									<span className="relative px-1">
										<div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"></div>
										<span className="relative inline-block text-deep-purple-accent-400">Anytime, Anyday</span>
									</span>
									</h2>
									<p className="text-base text-gray-700 md:text-lg">
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
									</p>
								</div>
								<div className="grid gap-5 row-gap-8 sm:grid-cols-2">
									<div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
										<div className="h-full p-5 border border-l-0 rounded-r">
											<h6 className="mb-2 font-semibold leading-5">
												Kano, Nigeria
											</h6>
											<p className="text-lg text-gray-900">
											Lookout flogging bilge rat main sheet bilge water nipper fluke to go on account heave down.
											</p>
										</div>
									</div>
									<div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
										<div className="h-full p-5 border border-l-0 rounded-r">
											<h6 className="mb-2 font-semibold leading-5">
												Lagos, Nigeria
											</h6>
											<p className="text-lg text-gray-900">
											Those options are already baked in with this model shoot me an email clear.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden md:block">
								<img className="object-cover w-full h-56 rounded shadow-lg sm:h-96" src={BgImage} alt="" />
							</div>
						</div>
					</div>
				</div>			
			</section>
  )
}

export default About