import  { createContext,  useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import "./Products.css";
import axios from "axios"
export const SearchText=createContext();
const Products = ({children}) => {
  const [productImage,setProductImage]=useState([]);
  const navigate=useNavigate();
 
  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get(
        "https://api.unsplash.com/photos/?client_id=tlAnkqDhDQTe1twR6hSRVg36FpIR35T4iztAY-oabDA",
        { headers: { accept: "application/json" } }
      );
      console.log(await result.data);
      setProductImage( result.data);
    };
    fetch();
  }, []);
  const handleSearchTerm=(searchItem)=>{
    const filtersearch=productImage.filter((item)=>(item.user.first_name.toLowerCase().includes(searchItem.toLowerCase())))
    setProductImage(filtersearch);
  }
  return (
    <div className="container" >
      {productImage.map((api, ind) => {
        return (
          <div key={ind}>
            <div className="col-md-4 ">
              <div className="product-grid" onClick={() => navigate(`/summer/${api.id}`)}>
                <div className="product-image">
                  <Link to={`/summer/${api.id}`}>
                    <img className="pic-1" src={api.urls.small} alt="" />
                    <img className="pic-2" src={api.urls.small} alt="" />
                  </Link>

                  <ul className="social">
                    <li>
                      <a href="" data-tip="Quick View">
                        <i className="fa fa-search"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" data-tip="Add to Wishlist">
                        <i className="fa fa-shopping-bag"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                  <span className="product-new-label">Sale</span>
                  <span className="product-discount-label">20%</span>
                </div>
                <ul className="rating">
                  <li className="fa fa-star"></li>
                  <li className="fa fa-star"></li>
                  <li className="fa fa-star"></li>
                  <li className="fa fa-star"></li>
                  <li className="fa fa-star disable"></li>
                </ul>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">{api.user.first_name}</a>
                  </h3>
                  <div className="price">
                    $16.00
                    <span>$20.00</span>
                  </div>
                  <a className="add-to-cart" href="">
                    <span>+ Add To Cart</span>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default Products;
