const request = require('supertest');
const { app, server } = require('../index')

// Handle the done() callback and force the NodeJS process to close
// as it hangs open forever when you do server-related stuff in Jest
// "afterAll" is a magic built-in Jest function that will run when
// all tests & test suites have finished running.
afterAll(async (done) => {
    // Force our server reference to close:
    await server.close();
  
    // Dumb hack to trick Jest into waiting a bit more before 
    // it freaks out over processes hanging open. 
    // Potentially because server.close() does not complete instantly? Not sure.
    // This has been an issue for ExpressJS & Jest devs 
    // for several years & solutions are vague.
    await new Promise(resolve => setTimeout(() => resolve(), 500));
  
    // Resolve the done() callback? Again not sure, as solutions are vague.
    done();
})

// test if home page works with 200 status
describe('Home page route exists', () => {
    it('Should be showing the home page', async (done) => {
        const res = await request(app).get('/')
        expect(res.statusCode).toEqual(200)
        done()
    })
})

// test to see if books object comes through (/books)
describe('Books index page', () => {
    it('Should show all books', async (done) => {
        const expected = [{
            id: 1,
            name: 'IT',
            author: 'Stephen King',
            movie: true
            },
            {
            id: 2,
            name: 'Looking for Alaska',
            author: 'John Green',
            movie: false
        }];
        const res = await request(app).get('/books')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(expected)
        done()
    })
})

// test to see if book comes through from :id
describe('Books show page', () => {
    it('Should show one book', async (done) => {
        const bookId = 1
        const expected = {
            id: 1,
            name: 'IT',
            author: 'Stephen King',
            movie: true
        };
        const res = await request(app).get(`/books/${bookId}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(expected)
        done()
    })
})

// test to see if book is added to books object
describe('Create a book', () => {
    it('Should create a book and add it to the books object', async (done) => {
        const newBook = {
            id: 3,
            name: 'LOTR',
            author: 'JR Tolkien',
            movie: true
        };
        const expected = [{
            id: 1,
            name: 'IT',
            author: 'Stephen King',
            movie: true
            },
            {
            id: 2,
            name: 'Looking for Alaska',
            author: 'John Green',
            movie: false
            },
            {
            id: 3,
            name: 'LOTR',
            author: 'JR Tolkien',
            movie: true
        }];
        const res = await request(app)
            .post(`/books`)
            .send(newBook)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(expected)
        done()
    })
})

// test to see if updated book function works
describe('Books update page', () => {
    it('Should update selected book', async (done) => {
        const bookId = 1
        const newBook = {
            name: 'Harry Potter',
            author: 'JR Rowling',
            movie: true
        }
        const expected = [{
            id: 1,
            name: 'Harry Potter',
            author: 'JR Rowling',
            movie: true
            },
            {
            id: 2,
            name: 'Looking for Alaska',
            author: 'John Green',
            movie: false
            },
            {
            id: 3,
            name: 'LOTR',
            author: 'JR Tolkien',
            movie: true
        }];
        const res = await request(app)
            .put(`/books/${bookId}`)
            .send(newBook)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(expected)
        done()
    })
})
  