import React from "react";
import { Link } from "react-router-dom";
import "./styles/header.scss";
import SearchIcon from "@material-ui/icons/Search";
import Shop from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";

const Header = () => {
  const [{ basket }] = useStateValue();

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="advertisment"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__option--lineOne">hello kalph </span>
            <span className="header__option--lineTwo">sign In </span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__option--lineOne">Returns </span>
            <span className="header__option--lineTwo">& orders </span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__option--lineOne">Your </span>
            <span className="header__option--lineTwo">Prime </span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <Shop />
            <span className="header__option--lineTwo">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
export default Header;
