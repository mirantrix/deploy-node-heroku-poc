const express = require('express');
const env = require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Landing Page');
});

app.listen(port, () => console.log(`at Port: ${port} ${process.env.CONSOLE}`));
