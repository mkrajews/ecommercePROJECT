const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const constring = require ("../public/config.js");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const config = require('./config.js');
const FacebookStrategy = require('passport-facebook').Strategy;
const cookieParser = require('cookie-parser');
const session = require('express-session');

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

const CacheBuster = require('gulp-cachebust');
const cachebust = new CacheBuster();





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

// sessions:
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'keyboardcat'
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(obj, done) {
  console.log(obj);
  db.getUserByFacebookId([obj.facebookid], function (err, user) {
    done(null, obj);
  });
});
// sessions end

// facebook auth part 1
passport.use(new FacebookStrategy({
    clientID: '1916694081896812',
    clientSecret: '909d5cb5ce65745edd22a53d197a6ba2',
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    db.getUserByFacebookId([profile.id], function (err, user) {
      console.log(user);
      if(!user.length){
        db.createUserFacebook([profile.id, profile.displayName], function(err, newUser){
          return done(null, newUser[0])
        })
      }
      else return done(null, user[0]);
    });
  }
));
// OR??
// function(accessToken, refreshToken, profile, cb) {
//   db.getUserByFacebookId([profile.id], function(err, user) {
//     user = user[0];
//     if (!user) {
//       console.log('CREATING USER');
//       db.createUserFacebook([profile.displayName, profile.id], function(err, user) {
//         console.log('USER CREATED', user);
//         return cb(err, user);
//       })
//     } else {
//       return cb(err, user);
//     }
//   })
// }));
// fb part 1 ends here



// fb part 3
var requireAuth = function(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/login');
};
// fb part 3 end


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

// fb part 2
app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

  app.get('/auth/logout', function(req, res){
    req.session.destroy();
    res.redirect('/');
  });

// fb endpoints:
  // app.get('/',requireAuth, function(req, res) {
  //   return res.sendFile(__dirname+'/public/home.html');
  // });
  // app.get('/login', function(req, res) {
  //   return res.sendFile(__dirname+'/public/login.html');
  // });



// fb part 2 ends



app.get('/loggedIn', function(req, res){
  if(!req.session.passport){
    res.json(false);
  }
  else {
    res.json(req.session.passport.user);
  }
});


app.listen(3000, function() {
  console.log('whatevs');
});
