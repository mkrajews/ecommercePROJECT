const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const app = module.exports = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('./public'));

//database
const massiveInstance = massive.connectSync({connectionString : process.env.connectionString});
app.set('db', massiveInstance);
const db = app.get('db');
const serverController = require('./serverCtrl.js');





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
