const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  console.log(req.headers);
  res.send(req.headers);
});


module.exports = app;