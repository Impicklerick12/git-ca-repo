const book = require("../models/book");
const { books } = require("../models/book");
// const utilities = require('../utils/utilities')

const index = (req, res) => {
    res.send(books)
}

const show = (req, res) => {
    // Matching the req.params.id with an id in the books object
    const book = books.find(book => req.params.id == book.id)
    // console.log(req.params.id)
    res.send(book)
}

const create = (req, res) => {
    // Taking the data written into postman, saving it to variable
    const newBook = req.body
    // console.log(req.body)

    // creating new id for newBook. incrementing books length
    newBook['id'] = books.length + 1
    // pushing newBook into books object
    books.push(newBook)
    // console.log(newBook)
    res.send(newBook)
}

const update = (req, res) => {
    // finding the id of the book using the params
    // matching the req.params.id with an id in the books object
    const book = books.find(book => req.params.id == book.id)
    // console.log(book)
    // taking the data from postman and saving it to new variable
    updatedBook = req.body
    console.log(updatedBook)
    // appeding the book object, with updatedBook information
    book.name = updatedBook.name
    book.author = updatedBook.author
    book.movie = updatedBook.movie

    res.send(book)
}

const destroy = (req, res) => {
    // finding the id of the book using the params
    // matching the req.params.id with an id in the books object
    const book = books.find(book => req.params.id == book.id)
    console.log(book)
    // finding the index of the book in the books object
    bookIndex = books.indexOf(book)
    console.log(bookIndex)
    // using splice to remove the book from books object, by using its index and length(number of books wanting to be removed)
    books.splice(bookIndex, 1)
    res.send(books)
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}