require("dotenv").config()
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const { create } = require('express-handlebars');

const port = process.env.port;

const app = express();

app.set('views', path.join(__dirname, 'views'));
const hbs = create({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
});

app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs');


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  console.log(new Date().toISOString(), req.headers['x-forwarded-for'])
  res.send('Hola  Care Nalga!')
})

app.listen(port, () => {
  console.log(`Admipat report serving app has been initialized on port: ${port}`)
})