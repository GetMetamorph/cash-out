import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/UserModel.js';
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          adminPrivilege: user.adminPrivilege,
          address: user.address,
          phoneNumber: user.phoneNumber,
          token: generateToken(user),
        });
        return;
      }
    }
    res
      .status(401)
      .send({ message: "L'addresse mail ou le mot de passe est incorrect" });
  })
);

userRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    const user = await newUser.save();
    res.send({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      adminPrivilege: user.adminPrivilege,
      phoneNumber: user.phoneNumber,
      token: generateToken(user),
    });
  })
);

export default userRouter;
