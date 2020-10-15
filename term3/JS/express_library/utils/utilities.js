const { books } = require('../models/book');

const getBook = (id) => {
    const book = books.find(book => book.id === id) // enables type coercion
    console.log(book)
    return book
}

module.exports = getBook