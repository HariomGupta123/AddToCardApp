import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <>
      <div className="newsletter-section">
        <div className="newsletter-content">
          <span className="small-text">NewsLetter</span>
          <span className="big-text">
            Sign up for latest updates and offers
          </span>
          <div className="form">
            <input
              type="text"
              placeholder="email address"
              className="newsletter-input"
            />
            <button className="subscribe">Subscribe</button>
          </div>
          <div className="text">
            we will be used in accordance with our privacy police
          </div>
          <div className="social-icons">
            <div className="icon">
              <FaFacebook size={14} />
            </div>
            <div className="icon">
              <FaTwitter size={14} />
            </div>
            <div className="icon">
              <FaInstagram size={14} />
            </div>
            <div className="icon">
              <FaLinkedin size={14} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsLetter;
