const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const constring = 'postgres://abmfdxmt:EujkUYAgdhfidxI8mLNX6sRIKUl-l5fE@elmer.db.elephantsql.com:5432/abmfdxmt';

// double here:
const app = module.exports = express();
const massiveInstance = massive.connectSync({
  connectionString: constring
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
  // res.send('see?');
  db.get_all_products(function(err, products) {
    res.status(200).json(products);
  });
});
// find particular product
app.get('/products/name/:name', function(req, res, next) {
  db.get_product_by_name(req.params.name, function(err, product) {
    res.status(200).send(product);
  })
});
// create product
app.post('/products', function(req, res, next) {
})
// update product
app.put('/products/:id', function(req, res, next) {
})
// delete product
app.delete('/products/:id', function(req, res, next) {
})




app.listen(3000, function() {
  console.log('whatevs');
});
