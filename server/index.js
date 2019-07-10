require('dotenv').config(__dirname + '../.env')
const express = require('express')
const controller = require('./controller.js')
const session = require('express-session')
const massive = require('massive')
const {
    SERVER_PORT,
    SESSION_SECRET
} = process.env

const app = express();

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
    })
)

app.listen(SERVER_PORT, (res, req) => {
console.log(`Listening on port ${SERVER_PORT}`);
})