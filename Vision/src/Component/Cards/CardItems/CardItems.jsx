import pro from "../../../assets/newsletter.png";
import { MdClose } from "react-icons/md";
import "./CardsItems.css";
import UserContext from "../../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
const CardItems = () => {
  const [addedItem, setAddedItem] = useState([]);
  const { cardItem, handleCardRemove } = useContext(UserContext);
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
        {cardItem.map((item,index) => (
          <div className="cart-product" key={index}>
            <div className="img-container">
              <img
                src={item.urls.small}
                alt=""
                style={{ height: 90, width: 80 }}
              />
            </div>
            <div className="prod-detial">
              <span className="name">{item.description}</span>
              <MdClose onClick={() => { return handleCardRemove(index); }} className="close-btn" />
              <div className="quantity-buttons">
                <span className="qual">-</span>
                <span className="qual">5</span>
                <span className="qual">+</span>
              </div>
              <div className="text">
                <span>3</span>
                <span>x</span>
                <span className="highlight">&#8377;{item.width}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default CardItems;
