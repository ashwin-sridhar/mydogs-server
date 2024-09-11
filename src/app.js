const express = require('express');
const dogsRouter = require('./routes/dogs');

const app = express();

app.use(express.json());
app.use('/dogs', dogsRouter);

module.exports = app;