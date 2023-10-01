import React from 'react'
import NewsLetter from "./NewsLetter/NewsLetter";
import "./Footer.css";
import { FaEnvelope, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <NewsLetter/>
      <footer className="footer">
        <div className="footer-content">
          <div className="col">
            <div className="title">About</div>
            <div className="text">
              WebCanva is a free-to-use online graphic design tool. Use it to
              create social media posts, presentations, posters, videos, logos
              and more.
            </div>
          </div>
          <div className="col">
            <div className="title">contact</div>
            <div className="c-item">
              <FaLocationArrow className="svg" />
              <div className="text">
                WebDesign anything with ease in Canva. Create anything in a
                snap, from presentations and logos to social media posts. Get
                inspired and see what you can do on Canva, no design skills or
              </div>
            </div>
            <div className="c-item">
              <FaMobileAlt className="svg" />
              <div className="text">+9779821973432</div>
            </div>
            <div className="c-item">
              <FaEnvelope className="svg" />
              <div className="text">Email: store@jsdev.com</div>
            </div>
          </div>
          <div className="col">
            <div className="title">Category</div>
            <div className="span">
              <span className="text">Headphones</span>
              <span className="text">Smart Watches</span>
              <span className="text">Bluetooth Speakers</span>
              <span className="text">Wireless Earbuds</span>
              <span className="text">Home Theatre</span>
              <span className="text">Projectors</span>
            </div>
          </div>
          <div className="col">
            <div className="title">Pages</div>
            <div className="span">
              <span className="text">Home</span>
              <span className="text">About</span>
              <span className="text">privacy policy</span>
              <span className="text">Returns </span>
              <span className="text">Terms and Conditions</span>
              <span className="text">Contact Us</span>
            </div>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar-content">
            <div className="text">
              VISION ECOMMERCE 2023 CREATED BY DES VU TECHNOLOGIES
            </div>
            <img src="" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
