import React, { useEffect, useState } from "react";
import SearchBar from "../NavBar/uploadImage/SearchBar";
import Products from "../Products/Products";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="home">
        <span>
          <Products />
        </span>
      </div>
    </div>
  );
};

export default Home;
