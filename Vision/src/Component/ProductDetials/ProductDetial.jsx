import { FaCartPlus, FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa" 
import "./productDetial.css"
import watch from "../../assets/newsletter1.jpg";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import UserContext from "../../context/UserContext";
import axios  from "axios";
const ProductDetial = () => {
const [addedItem, setAddedItem] = useState(null);
const [quantity,setQauntity]=useState(1);
const increament=()=>{
  setQauntity((prevState)=> prevState +1)
}
const decrement=()=>{
  setQauntity((prevState)=>{
    if(prevState ===1) return 1;
    return prevState -1
  })
}
const { handleAddCard, handleCardRemove, cardItem } = useContext(UserContext);
const {id}=useParams();
    useEffect(() => {
      const fetch = async () => {
        const results = await axios.get(
          `https://api.unsplash.com/photos/${id}?client_id=tlAnkqDhDQTe1twR6hSRVg36FpIR35T4iztAY-oabDA`,
          { headers: { accept: "application/json" } }
        );
        console.log(await results.data);
        setAddedItem(await results.data);
      };
      fetch();
    }, [id]);
    if(!addedItem) return;
    
  return (
    <>
      <div className="single-product-main-content">
        <div className="layout">
          <div className="single-product-page">
            <div className="left">
              <img
                src={"https://api.unsplash.com/photo/" + addedItem.urls.small}
                alt=""
                className="pro-image"
              />
            </div>
            <div className="right">
              <span className="name"> Product name</span>
              <span className="price"> Price</span>
              <span className="desc"> {addedItem.alt_description}</span>
              <div className="cart-buttons">
                <div className="quantity-buttons">
                  <span className="qual" onClick={decrement}>
                    -
                  </span>
                  <span className="qual">{quantity}</span>
                  <span className="qual" onClick={increament}>
                    +
                  </span>
                </div>
                <button className="add-to-cart-button" onClick={()=>{handleAddCard(addedItem,quantity)}}>
                  <FaCartPlus size={20} />
                  ADD TO CART
                </button>
              </div>
              <span className="divider" />
              <div className="info-item">
                <span className="text-bold">
                  Categary:
                  <span className="bold">Headphone</span>
                </span>
                <span className="text-bold">
                  Share:
                  <span className="social-icons">
                    <FaFacebook className="social-icons" size={16} />
                    <FaTwitter className="social-icons" size={16} />
                    <FaInstagram className="social-icons" size={16} />
                    <FaPinterest className="social-icons" size={16} />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetial;