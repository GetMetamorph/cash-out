import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      adminPrivilege: user.adminPrivilege,
      address: user.address,
      phoneNumber: user.phoneNumber,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRATION_TIME }
  );
};
