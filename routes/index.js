const express = require('express');

const router = express.Router();

// Do work here
router.get('/about', (req, res) => {
  // res.send('Hey! It only bloody works!');
  res.render('about', { examplePerson: 'Brando', list: ['Malaga', 'Rio'] });
});


router.get('/songs', (req, res) => {
  res.render('songs', {
    title: 'songs title',
  });
});

router.get('/artists', (req, res) => {
  res.render('artists', {
    title: 'artists title',
  });
});


router.get('/', (req, res) => {
  // res.send('Hey! It only bloody works!');
  res.render('hello');
});

module.exports = router;
