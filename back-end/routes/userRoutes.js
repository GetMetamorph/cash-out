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

export default userRouter;
