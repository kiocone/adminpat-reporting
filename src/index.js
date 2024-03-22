require("dotenv").config()
const morgan = require('morgan');
const express = require('express');
const fileUpload = require("express-fileupload");
const fs = require('fs')
const port = process.env.port;

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(fileUpload({
  limits: { fileSize: 10 * 1024 * 1024 },
}));

fs.mkdir(process.cwd() + '/reports', (err) => {
  if (err?.code == 'EEXIST') {
    console.log('reports folder already exist, PASS!')
  } else {
    console.log('Created directory for reports on /reports')
  }
})

app.use(require('./routes'));


app.listen(port, () => {
  console.log(`Admipat report serving app has been initialized on port: ${port}`)
})