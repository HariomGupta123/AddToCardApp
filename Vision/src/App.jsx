
import './App.css'
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import NavBar from './Component/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductDetial from './Component/ProductDetials/ProductDetial';
import AppContext from './context/AppContext';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
    const [productContain, setProductContain] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get(
        "https://api.unsplash.com/photos/?client_id=tlAnkqDhDQTe1twR6hSRVg36FpIR35T4iztAY-oabDA",
        { headers: { accept: "application/json" } }
      );
      console.log(await result.data);
      setProductContain(result.data);
    };
    fetch();
  }, []);
  const handleSearchTerm = (searchItem) => {
    const filtersearch = productContain.filter((item) =>
      item.user.first_name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setProductContain(filtersearch);
  };

  return (
    <>
      <div>
        <BrowserRouter>
          <AppContext>
            <NavBar handleSearchTerms={handleSearchTerm} />
            <Routes>
              <Route
                index
                element={<Home productContains={productContain} />}
              />
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
