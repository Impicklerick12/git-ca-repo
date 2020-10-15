const express = require( 'express' );
const bookRouter = require('./routes/booksRoutes');
const app = express();

// Make sure you understand how your data is being sent to you before deciding to use
// either json() or urlencoded()
app.use(express.json())
// app.use( express.urlencoded() )
const PORT = 3000

app.get('/', (req, res) => {
    res.send('<h1>Welcome to your library!</h1>')
})

app.use('/books', bookRouter)

const server = app.listen( PORT, () => {
    console.log(`Your app is running on port ${PORT}, QUICK!! go catch it!!`)
})

module.exports = {
    app,
    server
}
