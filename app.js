const http = require("http");
// const route = require("./routes");

const express = require('express');
const app = express()

app.use((req, res, next) => {
    console.log('in the middleware')
    next()
})

app.use((req, res, next) => {
    console.log('in another middleware')
    res.send('<h1>Hello world</h1>')
    // next()
})

const server = http.createServer(app);

server.listen(3000);
