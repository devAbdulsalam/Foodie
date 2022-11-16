import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Home"
import Login from './Login';
import Signin from './Signin';
import Dashboard from './Dashboard'
import PreviewFood from './PreviewFood'

function App() {
  return (
   <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/signin" exact element={<Signin />}></Route>
          <Route path="/dashboard" exact element={<Dashboard />}>
          </Route>
            <Route path="/foodInfo" exact element={<PreviewFood />}></Route> 
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
