const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8888;
const app = express();
const todos = require('./todos');

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
