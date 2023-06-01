const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  //for chose how to manage the categories
  category: {
    type: String
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop'
  }
},{timestamps: true})

const Product = mongoose.model('product', productSchema);
module.exports = Product;

