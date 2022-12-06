import React from 'react'

const Header = () => {
  return (
    <header className="w-full">
		<div
			className="relative overflow-hidden bg-no-repeat bg-cover header">
			<div
				className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
				style={{backgroundColor: "rgba(4, 53, 2, 0.5)"}}
			>
				<div className="flex justify-center items-center h-full">
					<div className="text-center text-white px-6 md:px-12">
						<h2
							className="text-4xl font-bold mt-0 mb-6 text-green-500 text-center"
						>
							Food, Dishes and Delicacies
						</h2>
						<h3 className="text-3xl font-bold mb-8">
							Explore our Toothsome Foods
						</h3>
						<a href="/menus">
							<button
								type="button"
								className="inline-block px-6 py-2.5 border-2 text-white bg-green-600 hover:bg-green-400 hover:border-green-400 border-green-600 font-medium text-lg leading-tight uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
							>
								Explore Now
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	</header>
  )
}

export default Header