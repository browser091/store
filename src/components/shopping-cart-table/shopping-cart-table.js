import React from "react";
import "./shopping-cart-table.scss";

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Ваш закз</h2>
      <table className="table">
        <thead>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </thead>
        <tbody>
          <th>1</th>
          <th>Site Reliability Engineering</th>
          <th>2</th>
          <th>$40</th>
          <th>
            <button className="btn btn-outline-danger btn-sm">
              <i className="fa fa-trash-o" />
            </button>
            <button className="btn btn-outline-success btn-sm">
              <i className="fa fa-plus-circle" />
            </button>
            <button className="btn btn-outline-warning btn-sm">
              <i className="fa fa-minus-circle" />
            </button>
          </th>
        </tbody>
      </table>
      <div className="total">Сумма: $434</div>
    </div>
  );
};
export default ShoppingCartTable;
