import React from 'react'

const Testimonial = () => {
  return (
    <section id="reviews" className="text-gray-700 bg-gray-50 py-10">
				<div className="my-8 md:w-11/12 lg:w-4/5 m-auto">
					<div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
						<h3 className="text-4xl font-bold mb-6 text-gray-800">Testimonials</h3>
						<p className="mb-6 pb-2 md:mb-12 md:pb-0">
							What Our Customer has to Say
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-6 text-center">
						<div>
							<div className="block rounded-lg shadow-lg bg-white">
								<div
									className="overflow-hidden rounded-t-lg h-28"
									style={{backgroundColor: "#6d5b98"}}
								></div>
								<div
									className="w-24 -mt-12 overflow-hidden border md:border-2 border-white rounded-full mx-auto bg-white"
								>
									<img
										src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                        alt='Maria Smantha'
									/>
								</div>
								<div className="p-6">
									<h4 className="text-2xl font-semibold mb-4">Maria Smantha</h4>
									<hr />
									<p className="mt-4">
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="quote-left"
											className="w-6 pr-2 inline-block"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
										>
											<path
												fill="currentColor"
												d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
											></path>
										</svg>
										Food is palataible, and delivery is fast, Whenever I'm hungry Foodie is what comes to my mind first.
									</p>
								</div>
							</div>
						</div>
						<div>
							<div className="block rounded-lg shadow-lg bg-white">
								<div
									className="overflow-hidden rounded-t-lg h-28"									
									style={{backgroundColor: "#6d5b98"}}
								></div>
								<div
									className="w-24 -mt-12 overflow-hidden border md:border-2 border-white rounded-full mx-auto bg-white"
								>
									<img
										src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                        alt='Lisa Cudrow'
									/>
								</div>
								<div className="p-6">
									<h4 className="text-2xl font-semibold mb-4">Lisa Cudrow</h4>
									<hr />
									<p className="mt-4">
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="quote-left"
											className="w-6 pr-2 inline-block"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
										>
											<path
												fill="currentColor"
												d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
											></path>
										</svg>
                                        Foodie is where class meet taste, its has been my No. 1 food service resturant since the 80s, there foood are Toothsome and prepare to meet your taste. 
									</p>
								</div>
							</div>
						</div>
						<div>
							<div className="block rounded-lg shadow-lg bg-white">
								<div
									className="overflow-hidden rounded-t-lg h-28"
									style={{backgroundColor: "#6d5b98"}}
								></div>
								<div
									className="w-24 -mt-12 overflow-hidden border md:border-2 border-white rounded-full mx-auto bg-white"
								>
									<img
										src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                        alt='John Smith'
									/>
								</div>
								<div className="p-6">
									<h4 className="text-2xl font-semibold mb-4">John Smith</h4>
									<hr />
									<p className="mt-4">
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="quote-left"
											className="w-6 pr-2 inline-block"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
										>
											<path
												fill="currentColor"
												d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
											></path>
										</svg>
										Delectus impedit saepe officiis ab aliquam repellat rem unde
										ducimus.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
  )
}

export default Testimonial