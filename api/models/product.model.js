const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    typer: String,
  },
  //for chose how to manage the categories
  category: {
    type: String
  }
  //shop population will be insterted here
},{timestamps: true})

const Product = mongoose.model('product', productSchema);
module.exports = Product;

