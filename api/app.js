require('dotenv').config();

const express = require('express');
const logger = require('morgan')

//loading DB connection
require('./configs/db.config');

const app = express();

app.use(logger('dev'));
app.use(express.json());

const router = require('./configs/routes.config');
app.use('/api/v1', router);

const port = process.env.PORT;
app.listen(port, () => console.info(`Application running at port ${port}`));''