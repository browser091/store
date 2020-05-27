import React from "react";
import "./storeHeader.scss";
import { Link } from "react-router-dom";

const StoreHeader = ({ numItems, total }) => {
  return (
    <header className="store-header row">
      <Link to="/">
        <div className="logo text-dark" href="#">
          Магазин книг
        </div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" /> {numItems}
          товар-(а/ов) (${total})
        </div>
      </Link>
    </header>
  );
};

export default StoreHeader;
