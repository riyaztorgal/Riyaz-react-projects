import { HEADER_LOGO } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnClick, setBtnClick] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={HEADER_LOGO}></img>
      </div>
      <div className="nav-tab">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
