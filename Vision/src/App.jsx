
import './App.css'
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import NavBar from './Component/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductDetial from './Component/ProductDetials/ProductDetial';
import AppContext from './context/AppContext';
function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <AppContext>
            <NavBar />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/summer/:id" element={<ProductDetial />} />
            </Routes>
            <Footer />
          </AppContext>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
