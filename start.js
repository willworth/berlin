const mongoose = require('mongoose');
// const port = 3088;
const port = process.env.PORT || 3088;
const app = require('./app');
const chalk = require('chalk'); // why does this not get pulled in by app?


console.log(chalk.underline.bgBlue('   Berlin App starting...    '));


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/berlin');
mongoose.connection.on('error', (err) => {
  console.error(`🥉🥉🥉You tried.🥉🥉🥉 → ${err.message}`);
});


// console.log(`testing chalk ${chalk.blue('This is from start.js')}`);

app.listen(port, () => {
  console.log(`'😊 😊', ${chalk.magentaBright('BERLIN'),
  chalk.cyanBright.bgGreen('🎻  server running on http://localhost:3088/')}`);
  // console.log('😊 😊 BERLIN🎻  server running on http://localhost:3088/');
  // console.log('😊 😊 BERLIN🎻  server running on ', port);
});

