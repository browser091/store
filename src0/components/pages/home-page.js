import React from 'react'
import BookList from '../book-list/book-list'
const book = [{
    id: 1,
    title: "sxDE ded EfCfE",
    author: 'Sdsc  f ee  ef '
}, {
    id: 2,
    title: "5656565b 56y y ",
    author: '6uy y j  y j '
}]
const HomePage = () => {
    return <BookList books={book} />
}
export default HomePage