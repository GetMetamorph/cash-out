import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import cors from 'cors';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to database');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

//sert à convertir les données dans la post request en objet json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*"}));

app.use('/api/seed', seedRouter);

app.use('/api/products', productRouter);

app.use('/api/orders', orderRouter);

app.use('/api/users', userRouter);

app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

//Gére les erreurs, fonctionne comme un middelware
app.use((err, req, res, next) => {
  err.status = err.status || 500;
  res.status(err.status).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
