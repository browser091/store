import React from "react";
import {
  allBooksRemovedFromCart,
  bookRemovedFromCart,
  bookAddedToCart,
} from "../../actions";

import "./shopping-cart-table.scss";
import { connect } from "react-redux";

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <th>{idx + 1}</th>
        <th>{title}</th>
        <th>{count}</th>
        <th>${total}</th>
        <th>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm"
          >
            <i className="fa fa-minus-circle" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm"
          >
            <i className="fa fa-trash-o" />
          </button>
        </th>
      </tr>
    );
  };
  return (
    <div className="shopping-cart-table">
      <h2>Ваша корзина </h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">Сумма: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};
const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
