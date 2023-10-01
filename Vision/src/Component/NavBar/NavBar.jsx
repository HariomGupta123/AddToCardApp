import  { useState } from "react";
import "./navBar.css"
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Cards from "../Cards/Cards";
import { Link, useNavigate } from "react-router-dom"
import LogIn from "./Forms/Login/LogIn";
import SingUp from "./Forms/SignUp/SingUp";
import SearchAsImage from "./SearchBarAsImage/SearchAsImage";
const NavBar = ({ handleSearchTerms  }) => {
  const [show, setShow] = useState(false);
  const [showSignUp, setSignUp] = useState(false);
  const [showSignIn, setSignIn] = useState(false);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const hnadleInput = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchTerm);
    handleSearchTerms(searchTerm)
  };
  const resisterFromLogin = () => {
    setSignIn(false);
    setSignUp(true);
  };
  const handleShowSignInform = () => {
    if (showSignUp) {
      setSignIn(true);
      setSignUp(false);
    } else {
      setSignIn(true);
    }
  };
  const handleShowSignUpform = () => {
    if (showSignUp) {
      setSignIn(false);
      setSignUp(true);
    } else {
      setSignUp(true);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" onClick={() => navigate("/")}>
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                {/*<a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 Category
                </a>*/}
                <Link
                  className="nav-link dropdown-toggle"
                  to={"category"}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    {/*<a className="dropdown-item" href="#">
                      Tranding
                    </a>*/}
                    <Link className="dropdown-item" to={"/Tranding"}>
                      Tranding
                    </Link>
                  </li>
                  <li>
                    {/*<a className="dropdown-item" href="#">
                      Winter clothes
                    </a>*/}
                    <Link className="dropdown-item" to={"/winter"}>
                      Winter clothes
                    </Link>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>*/}
                  <li>
                    {/*<a className="dropdown-item" href="#">
                      Summer clothes
                    </a>*/}
                    <Link className="dropdown-item" to={"/summer"}>
                      summer clothes
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex mx-auto w-50" onSubmit={handleSearch}>
              {/* Changed w-64 to w-75 here */}
              <input
                className="form-control "
                type="text"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={hnadleInput}
                style={{borderRight:"none"}}
              />
              <button className="btn btn-outline-success" type="submit" style={{borderLeft:"none",borderRadius:"none", backgroundColor:"green"}}>
                {/*Search*/} <i className="fas fa-search" style={{color:"black"}}></i>
              </button>
              <SearchAsImage />
            </form>
            <span className="form-content">
              <span className="SignIn" onClick={handleShowSignInform}>
                SignIn
              </span>
              <span className="SignUp" onClick={handleShowSignUpform}>
                SignUp
              </span>
            </span>

            <div>
              <div className="">
                <span className="mr-2">
                  <FaRegHeart />
                </span>

                <span className="cart-icon">
                  <FaShoppingCart
                    onClick={() => {
                      setShow(true);
                    }}
                  />
                  <span className="five">5</span>
                </span>
                {showSignIn && (
                  <LogIn
                    resisterFromLogin={resisterFromLogin}
                    cancelLoginPage={setSignIn}
                  />
                )}
                {showSignUp && <SingUp cancelSignUpPage={setSignUp} />}
                {show && <Cards showCart={setShow} />}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
