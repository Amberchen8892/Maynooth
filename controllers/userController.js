import asyncHandler from 'express-async-handler';

import User from '../models/userModel.js';

// @des    Authentication User and get token
// @route  POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdm: user.isAdmin,
      token: user.generateToken(),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});
// @des    Get user profile
// @route  GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('Success');
});

export { authUser, getUserProfile };
