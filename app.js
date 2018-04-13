const express = require('express');
const mongoose = require('mongoose'); // to interface with mongo
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser'); // Takes the raw requests and turns them into usable properties on req.body
const passport = require('passport');
const path = require('path');
const routes = require('./routes/index');
const helpers = require('./helpers');
const chalk = require('chalk');


// create our Express app
const app = express();
const port = process.env.PORT || 3088;


// view engine setup
app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too


// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));


// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());


// // Passport JS is what we use to handle our logins
app.use(passport.initialize());
app.use(passport.session());


app.use((req, res, next) => {
  res.locals.h = helpers;
  res.locals.currentPath = req.path;
  next();
});

app.use('/', routes);

// //ERROR HANDLING HERE #TODO

// done! we export it so we can start the site in start.js
module.exports = app;
