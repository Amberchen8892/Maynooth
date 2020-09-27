const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  if (req.user && req.user.isAdmin) {
    return res.status(200).json({ message: 'authorized' });
  }
  next();
};
