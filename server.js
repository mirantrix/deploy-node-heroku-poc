const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({id:"IYGD434HUIh", owner:"Eroku"});
});

app.listen(port, () => console.log(`${process.env.CONSOLE}`));
