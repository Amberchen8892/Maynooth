const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const admin = require('../../middleware/admin');
const Product = require('../../models/Product');
// @route   Get api/products
// @desc    Get all products
// @access  Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
});

// @route   Post api/products
// @desc    Create product
// @access  Private
router.post(
  '/',
  [
    auth,
    admin,

    [
      check('name', 'Name is required').not().isEmpty(),
      check('image1', 'Image1 is required').not().isEmpty(),
      check('department', 'Department is required').not().isEmpty(),
      check('categories', 'Categories is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      name,
      image1,
      image2,
      image3,
      image4,
      department,
      description,
      categories,
      count,
      reviews,
      rating,
      retail,
      sale,
    } = req.body;
    //build product object
    const productFields = {};
    productFields.user = req.user.id;
    if (name) productFields.name = name;
    if (image1) productFields.image1 = image1;
    if (image2) productFields.image2 = image2;
    if (image3) productFields.image3 = image3;
    if (image4) productFields.image4 = image4;
    if (department) productFields.department = department;
    if (description) productFields.description = description;
    if (count) productFields.count = count;
    if (reviews) productFields.reviews = reviews;
    if (rating) productFields.rating = rating;
    if (categories) {
      productFields.categories = categories
        .split(',')
        .map((category) => category.trim());
    }

    // build pricing object
    productFields.pricing = {};
    if (retail) productFields.pricing.retail = retail;
    if (sale) productFields.pricing.sale = sale;

    try {
      product = new Product(productFields);
      await product.save();
      res.json(product);
    } catch (error) {
      console.log(error.message);
      res.status.send('Server Error');
    }
  }
);

// // @route   Delete api/products/:id
// // @desc    Delete a product
// // @access  Private
router.delete('/:id', [auth, admin], async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Product is not found' });
    }
    // check on user
    if (product.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'user not authorized' });
    }
    await product.remove();
    res.json({ msg: 'product removed' });
  } catch (error) {
    console.log(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Product is not found' });
    }
    res.status(500).send('Server error');
  }
});

// @route   Put api/products/vars
// @desc    Add products details
// @access  private
router.put(
  '/vars',
  [
    auth,
    admin,

    [
      check('size', 'Size is require').not().isEmpty(),
      check('color', 'Color is require').not().isEmpty(),
      check('thumnail', 'Thumnail date is require').not().isEmpty(),
      check('quantity', 'Quantity date is require').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { size, color, thumnail, quantity } = req.body;
    const newVars = {
      size,
      color,
      thumnail,
      quantity,
    };
    try {
      const product = await Product.findOne({ user: req.user.id });
      product.vars.unshift(newVars);

      await product.save();
      res.json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server Error');
    }
  }
);
// @route   Delete api/products/vars/:var_id
// @desc    Delete var from product
// @access  private
router.delete('/vars/:var_id', [auth, admin], async (req, res) => {
  try {
    const product = await Product.findOne({ user: req.user.id });
    //remove index
    const removeIndex = product.vars
      .map((item) => item.id)
      .indexOf(req.params.var_id);
    product.vars.splice(removeIndex, 1);
    await product.save();
    res.json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
