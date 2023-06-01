const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlenght: 3,
    maxlenght: 20
  },
  //to be updated with google maps location
  location: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 30,
  }
},{timestamps: true})

//virtual populate of product would go here



const Shop = mongoose.model('shop', shopSchema);
module.exports = Shop;