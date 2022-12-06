import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Home"
import Login from './Login';
import Signin from './Signin';
import Dashboard from './Dashboard'
import About from './About'
import Menu from './Menu'
import PreviewFood from './PreviewFood'
import Error from './Error'
function App() {
  return (
   <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/signin" exact element={<Signin />}></Route>
          <Route path="/dashboard" exact element={<Dashboard />}></Route>
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/menus" exact element={<Menu />}></Route>
          <Route path="/menus/:id" exact element={<PreviewFood />}></Route>          
					<Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
