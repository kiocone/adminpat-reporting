import express, { urlencoded, json } from 'express';
import morgan from 'morgan';
import fileUpload from "express-fileupload";
import { mkdir } from 'fs';
import 'dotenv/config'
import routes from './routes/index.js'

const port = process.env.port;

const app = express();
app.use(morgan('dev'));
app.use(urlencoded({extended: false}));
app.use(json());
app.use(fileUpload({
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB file size.
}));

mkdir(process.cwd() + '/reports', (err) => {
  if (err?.code == 'EEXIST') {
    console.log('reports folder already exist, PASS!');
  } else {
    console.log('Created directory for reports on /reports');
  }
});

app.use(routes);

app.listen(port, () => {
  console.log(`PID: ${process.pid} - Admipat report serving app has been initialized on port: ${port}`);
})