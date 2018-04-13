const express = require('express');
const router = express.Router();

// Do work here
router.get('/about', (req, res) => {
    // res.send('Hey! It only bloody works!');
    res.render('about');
});
router.get('/', (req, res) => {
    // res.send('Hey! It only bloody works!');
    res.render('hello');
});

module.exports = router;