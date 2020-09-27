const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: String,
    required: true,
  },
  image1: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
  },
  image3: {
    type: String,
  },
  image4: {
    type: String,
  },

  department: {
    type: String,
    require: true,
  },
  categories: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
  },
  pricing: {
    retail: {
      type: Number,
      default: 0,
    },
    sale: {
      type: Number,
      default: 0,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
  count: {
    type: Number,
    default: 0,
    require: true,
  },
  vars: [
    {
      size: {
        type: String,
        require: true,
      },
      color: {
        type: String,
        require: true,
      },
      thumnail: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        default: 0,
        require: true,
      },
    },
  ],
  reviews: {
    type: Number,
    default: 0,
    require: true,
  },
  rating: {
    type: Number,
    default: 0,
    require: true,
  },
});
module.exports = Product = mongoose.model('Product', productSchema);
