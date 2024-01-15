import pro from "../../../assets/newsletter.png";
import { MdClose } from "react-icons/md";
import "./CardsItems.css";
import UserContext from "../../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
const CardItems = () => {
  const { cardItem, handleCardRemove, handleCardProductQauntity } =
    useContext(UserContext);
  
  return (
    <>
      <div className="cart-products">
        {cardItem.map((item, index) => (
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
              <MdClose
                onClick={() => {
                  return handleCardRemove(index);
                }}
                className="close-btn"
              />
              <div className="quantity-buttons">
                <span
                  className="qual"
                  onClick={() => {
                    handleCardProductQauntity("dec", item);
                  }}
                >
                  -
                </span>
                <span className="qual"> {item.qauntity}</span>
                <span
                  className="qual"
                  onClick={() => {
                    handleCardProductQauntity("inc", item);
                  }}
                >
                  +
                </span>
              </div>
              <div className="text">
                <span>{item.qauntity}</span>
                <span>x</span>
                <span className="highlight">&#8377;{item.width*item.width}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default CardItems;
