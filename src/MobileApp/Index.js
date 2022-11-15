import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';

const Index = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      <p>Hello world</p>
    <BrowserRouter>
		<Routes>
			<Route path="/" exact element={<Welcome />}></Route>
        </Routes>
    </BrowserRouter>
</div>
  )};
export default Index;