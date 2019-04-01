const express = require('express');
const env = require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({id:"IYGD434HUIh", owner:"Heroku"});
});

app.listen(port, () => console.log(`${process.env.CONSOLE}`));
