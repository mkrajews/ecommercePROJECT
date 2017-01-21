var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

// app.get('/test', function(req, res, next) {
//   res.status(200).send('got it');
// });

// GET ENDPOINTS:
// get all products
app.get('/products', function(req, res, next) {
  res.send('see?');
})
// find particular product
app.get('/products/:product', function(req, res, next) {

})
// POST ENDPOINTS:
// create product
app.post('/products', function(req, res, next) {

})
// PUT ENDPOINTS:
// update product
app.put('/products/:id', function(req, res, next) {

})
// DELETE ENDPOINTS:
// delete product
app.delete('/products/:id', function(req, res, next) {

})





app.listen(3000, function() {
  console.log('whatevs');
});
