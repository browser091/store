import React, { Fragment } from "react";
import "./book-list-item.scss";

const BookListItem = ({ book }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} />
      </div>
      <div className="book-details">
        <a href="#" className="book-title">
          {title}
        </a>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button className="btn btn-info add-to-cart">Добавить в корзину</button>
      </div>
    </div>
  );
};
export default BookListItem;
