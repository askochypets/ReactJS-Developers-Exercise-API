import express from 'express';
import bodyParser from 'body-parser';
import shippingRoutes from './routes/shippings.route';
import connectToDb from './db/connect';
import config from './config/config.dev';

connectToDb();

const app = express();
const port = config.serverPort;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', shippingRoutes);

app.listen(port, () => {
  console.info('App is running on port: ', port);
});
