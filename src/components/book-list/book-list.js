import React, { Component } from "react";
import BookLisItem from "../book-list-item/book-list-item";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { booksLoaded } from "../../actions";
import { compose } from "../../utils";
import "./book-list.scss";

class Booklist extends Component {
  componentDidMount() {
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();
    console.log(data);

    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;
    return (
      <ul className="book-list">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookLisItem book={book} />{" "}
            </li>
          );
        })}
      </ul>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = {
  booksLoaded,
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(Booklist)
);
