const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const connectTodb = require('./db/db');
connectTodb()
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;