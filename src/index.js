require("dotenv").config()
const path = require('path');
const morgan = require('morgan');
const express = require('express');

const port = process.env.port;

const app = express();


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes'));


app.listen(port, () => {
  console.log(`Admipat report serving app has been initialized on port: ${port}`)
})