import express from 'express';
import Product from '../models/ProductModel.js';
import data from '../data.js';
import User from '../models/UserModel.js';

//This file purpose is to implement all mocked data in data.js into mongoDb database
const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  //remove all previous record in product module
  await Product.remove({});
  await User.remove({});

  //Insert all object from data.js to db
  const createdProducts = await Product.insertMany(data.products);
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
});

export default seedRouter;
