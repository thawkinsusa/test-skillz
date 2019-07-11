require('dotenv').config(__dirname + '../.env')
const express = require('express')
const hc = require('./HouseController/controller.js')
const session = require('express-session')
const massive = require('massive')
const {
    SERVER_PORT,
    SESSION_SECRET,
    CONNECTION_STRING
} = process.env

const app = express();

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
    })
)

app.get('/api/house/:id', hc.getOne)
app.get('/api/houses', hc.getAll)

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db);
        app.listen(SERVER_PORT, (res, req) => {
            console.log(`Listening on port ${SERVER_PORT}`);
        });
    })
    .catch(err=>console.log('error'));

    app.use(express.json());
