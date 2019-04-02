const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({ title: "Proof of Concept", message: "Deploy Node App from Heroku" });
});

app.listen(port);
