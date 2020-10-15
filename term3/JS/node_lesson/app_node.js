const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const students = ["Ali", "Lachy", "Anfii"];

const server = http.createServer((req, res) => {
    // res.statusCode = 200; // All ok, positive response
    // res.setHeader("Content-Type", "text/plain")
    // console.log(req.method, req.url)
    // res.end("Hello World")

    if (req.method === "GET" && req.url === "/") {
        console.log("Matching students")
    } else if (req.method === "GET" && req.url === "/students") {
        console.log("Getting students")
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(students))
    } else if (req.method === "POST" && req.url === "/students") {
        console.log("Creating students")
    } else {
        console.log("Route not found")
    }
    res.end()
})

server.listen(port, hostname, () => {
    console.log(`server running on ${hostname}: ${port}`)
})

