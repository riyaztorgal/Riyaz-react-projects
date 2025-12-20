import { HEADER_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnClick, setBtnClick] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={HEADER_LOGO}></img>
      </div>
      <div className="nav-tab">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnClick === "Login"
                ? setBtnClick("Logout")
                : setBtnClick("Login");
            }}
          >
            {btnClick}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
