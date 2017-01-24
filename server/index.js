const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const constring = require ("../public/config.js")

// double here:
const app = module.exports = express();
const massiveInstance = massive.connectSync({
  connectionString: constring.db
});
app.set('db', massiveInstance);
const db = app.get('db');


// app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('./public'));

// test:
// console.log(db);

//database
// const massiveInstance = massive.connectSync({connectionString : process.env.connectionString});
// app.set('db', massiveInstance);
// const db = app.get('db');
const serverController = require('./serverCtrl.js');




// app.get('/test', function(req, res, next) {
//   res.status(200).send('got it');
// });

// get all products
app.get('/products', function(req, res, next) {
    // res.send('yea?');
  db.get_all_products(function(err, products) {
    res.status(200).json(products);
  });
});
// find particular product
app.get('/products/name/:name', function(req, res, next) {
  db.get_product_by_name(req.params.name, function(err, product) {
    res.status(200).send(product);
  });
});
// get cart items
app.get('/getCart', function(req, res, next) {
  db.get_cart(function(err, products) {
    console.log('get /getCart');
    res.status(200).json(products);
  });
});


// create product
app.post('/products', function(req, res, next) {
});
// add to cart
app.post('/addToCart', function(req, res) {
  console.log(req.body);
  db.add_product_to_cart([req.body.id], function(err, products) {
    console.log('POST /addToCart');
  });
});





// update product
app.put('/products/:id', function(req, res, next) {
});
// delete product
app.delete('/products/:id', function(req, res, next) {
});




app.listen(3000, function() {
  console.log('whatevs');
});
