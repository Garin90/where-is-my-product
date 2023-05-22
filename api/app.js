require('dotenv').config();

const express = require('express');

const app = express();

const port = process.env.PORT;
app.listen(port, () => console.info(`Application running at port ${port}`));