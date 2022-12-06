// import react from "react"
import Nav from "./Navbar"
import Sidebar from './Sidebar';
import Header from "./Header"
import Footer from "./Footer"

const  Home = () => {
  return (
    <div className="h-screen">
      <Nav />
      <Sidebar/>
      <Header />
      <Footer />
    </div>
  );
}

export default Home