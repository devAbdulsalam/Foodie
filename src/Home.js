import Nav from "./Navbar"
import Header from "./Header"
import Menu from "./Menu"
import Testimonial from "./Testimonial"
import Footer from "./Footer"
import About from './About';
const  Home = () => {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Menu />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home