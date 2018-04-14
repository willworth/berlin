/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

// moment.js is a handy library for displaying dates. We need this in our templates to display things like "Posted 5 minutes ago"
exports.moment = require('moment');

// Some details about the site
exports.siteName = 'Berlin CRUD';

exports.menu = [
  { link: '/songs', title: 'Songs' },
  { link: '/artists', title: 'Artists' },
];
