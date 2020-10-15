# Express Library

We are going to create some CRUD routes for a library app.

A starter file has been provided to the side to help you get started but the challenge should be completed on your own machine.

#### Just as a quick refresher, this means that we need routes that: 
* **GET** - Return a book
* **PUT** - Create a book
* **POST** - Edit a book
* **DELETE** - Delete a book

If you are unsure about parsing data in the body of a request, refer to the [docs](https://expressjs.com/en/resources/middleware/body-parser.html).

And remember that [body Parser is no longer explicitly required](https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c), we can gain the same functionality (almost) by using ```express.json()```



### **Extra challenge**

Make this data persistable by creating a function that either updates the book.js file or writes to a JSON file when a change is made to the array.