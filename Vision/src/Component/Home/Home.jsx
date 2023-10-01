import React, { useEffect, useState } from "react";
import SearchBar from "../NavBar/SearchBarAsImage/SearchAsImage";
import Products from "../Products/Products";
import "./home.css";

const Home = ({ handleSearchTerms, productContains }) => {
  return (
    <div>
      <div className="home">
        <span>
          <Products handleSearchTerms={handleSearchTerms} productContains={productContains}/>
        </span>
      </div>
    </div>
  );
};

export default Home;
