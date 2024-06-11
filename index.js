var express = require('express');
var app = express();
const session = require('express-session')

app.use(session({
  secret: 'caf8d6cc01069d3ba63c8f88eb72d382a3ae6503fec2f64258ce8b949b3ef6bcb2b31b8beab193dc8d236409abcb405306bc83bfd46f8e55cc2c6add0ebc252b',
  resave: false,
  saveUninitialized: false,
  cookie: {
      secure: false, // set this to true on production
  }
}));


// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.use('/', express.static('public'));

/*
    middleware for response
    this middleware is used for CORS policy
*/
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,PATCH,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Refresh-Token');
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  next();
});

// register route
app.use(require('./routes'));

app.listen(3257);
console.log('Server is listening on port 3257');
