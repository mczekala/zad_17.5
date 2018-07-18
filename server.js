var express = require('express');
var app = express();
app.use(express.static('assets'));

app.get('/', function(req, res) {
  res.send('/index.html');
});

app.get('/userform', function(req, res) {
  const response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  };
  res.end(JSON.stringify(response));
});

app.use('/store', function(req, res, next) {
  console.log('Jestem pośrednikiem przy żądaniu do /store');
  next();
});
app.get('/store', function(req, res) {
  res.end('To jest sklep.');
});
var server = app.listen(3000, 'localhost', function() {
  console.log('nasłuchuje...');
});