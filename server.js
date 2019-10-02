const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 8888;
const todos = require('./todos');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  console.log(req.body);
  res.end();
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
