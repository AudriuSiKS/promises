const express = require('express')
const path = require('path');
const app = express()

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/js/promises.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'js/promises.js'));
})

app.get('/api/data.json', function (req, res) {
  res.sendFile(path.join(__dirname, 'data/data.json'));
})

app.listen(3000, function () {
  console.log('Promises simple app listening on port 3000!')
})