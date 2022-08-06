import express from 'express';
import Product from '../models/ProductModel.js';
import data from '../data.js';

//This file purpose is to implement all mocked data in data.js into mongoDb database
const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  //remove all previous record in product module
  await Product.remove({});

  //Insert all object from data.js to db
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts });
});

export default seedRouter;
