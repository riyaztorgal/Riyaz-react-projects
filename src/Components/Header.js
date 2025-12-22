import { HEADER_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnClick, setBtnClick] = useState("Login");

  const status = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={HEADER_LOGO}></img>
      </div>
      <div className="nav-tab">
        <ul>
          <li>User Status : {status ? "✅" : "🛑"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/instaMart">Insta-Mart</Link>
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
