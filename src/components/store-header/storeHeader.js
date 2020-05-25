import React from "react";
import "./storeHeader.scss";

const StoreHeader = ({ numItems, total }) => {
  return (
    <header className="store-header row">
      <a className="logo text-dark" href="#">
        Магазин книг
      </a>
      <a className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" /> {numItems} товар-(а/ов)
        ($
        {total})
      </a>
    </header>
  );
};

export default StoreHeader;
