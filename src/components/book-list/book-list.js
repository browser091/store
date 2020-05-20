import React, { Component } from 'react'
import BookLisItem from '../book-list-item/book-list-item'
import './book-list.sass'

class Booklist extends Component {
    render() {
        const { books } = this.props;
        return (
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookLisItem book={book} /> </li>
                        )
                    })
                }
            </ul>
        )

    }
}

export default Booklist