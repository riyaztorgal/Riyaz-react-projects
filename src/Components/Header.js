import { HEADER_LOGO } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContextData from "../utils/UserContexData";
const Header = () => {
  const [btnClick, setBtnClick] = useState("Login");

  const status = useOnlineStatus();

  const userData = useContext(UserContextData);

  return (
    <div className="bg-pink-100 justify-between flex">
      <div className="logo-container">
        <img className="w-40" src={HEADER_LOGO}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="m-4">User Status : {status ? "✅" : "🛑"}</li>
          <li className="m-4">
            <Link to="/">Home</Link>
          </li>
          <li className="m-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="m-4">
            <Link to="/instaMart">Insta-Mart</Link>
          </li>
          <li className="m-4">Cart</li>
          <button
            className=""
            onClick={() => {
              btnClick === "Login"
                ? setBtnClick("Logout")
                : setBtnClick("Login");
            }}
          >
            {btnClick}
          </button>
          <li className="m-4 font-bold">User Name : {userData.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
