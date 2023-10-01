import pro from "../../../assets/newsletter.png";
import { MdClose } from "react-icons/md";
import "./CardsItems.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
const CardItems = () => {
  const [addedItem, setAddedItem] = useState([]);
  const id = useParams();
  useEffect(() => {
    const added = async () => {
      const goods = await axios.get(
        `https://api.unsplash.com/photos/?client_id=tlAnkqDhDQTe1twR6hSRVg36FpIR35T4iztAY-oabDA`,
        { headers: { accept: "application/json" } }
      );
      console.log(await goods.data);
      setAddedItem(await goods.data);
    };
    added();
  }, []);
  return (
    <>
      <div className="cart-products">
        <div className="cart-product">
          <div className="img-container">
            <img src={pro} alt="" style={{ height: 80 }} />
          </div>
          <div className="prod-detial">
            <span className="name">product name</span>
            <MdClose className="close-btn" />
            <div className="quantity-buttons">
              <span className="qual">-</span>
              <span className="qual">5</span>
              <span className="qual">+</span>
            </div>
            <div className="text">
              <span>3</span>
              <span>x</span>
              <span className="highlight">&#8377;4567</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardItems;
