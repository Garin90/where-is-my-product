const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(() => console.info('Successfully connected to the database'))
  .catch((error) => console.error(`Error connecting to the data base: ${error}`))