require("dotenv").config()
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const fileUpload = require("express-fileupload");

const port = process.env.port;

const app = express();


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(fileUpload({
  limits: { fileSize: 10 * 1024 * 1024 },
}));

app.use(require('./routes'));


app.listen(port, () => {
  console.log(`Admipat report serving app has been initialized on port: ${port}`)
})