import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import WebApp from "./WebApp"
import MobileApp from "./MobileApp/Index"
function App() {
  return (
   <div className="bg-green-50 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<WebApp />}></Route>
          <Route path="/mobile" exact element={<MobileApp />}></Route>
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
