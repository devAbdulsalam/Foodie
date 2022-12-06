import React from 'react'
import Nav from "./Navbar"
import Footer from "./Footer"
import { Link } from 'react-router-dom';

const Error = () => {
return(
    <div className=''>
        <Nav />
        <div className="py-10 ">
          <div className="text-center mt-10 py-32">
            <h1 className="text-3xl">404 Error</h1>
          </div>
        </div>
        <div className="text-center p-10 text-xl">
          <p className='p-2 mb-4'>Page not found...</p>
          <Link to="/" className="p-2 m-2 bg-blue-500 font-medium">Go Back to Homepage</Link>
        </div>
        <Footer />    
    </div>
  )
}

export default Error