require('dotenv').config();
// Require Libraries
const express = require('express');
const twit = require("twit");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');

// App Setup
const app = express();

// Middleware

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));


// let Twitter = new twit({
//   consumer_key: process.env.TWITTER_CONSUMER_KEY,
//   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//   access_token: process.env.ACCESS_TOKEN,
//   access_token_secret: process.env.ACCESS_TOKEN_SECRET,
//   timeout_ms: 60 * 1000, // HTTP request timeout to apply to all requests.
//   strictSSL: true, // requires SSL certificates to be valid.
// });
//
// Twitter.get('search/tweets', {
//   q: '#corgi',
//   count: 100,
//   result_type: "mixed"
// }).catch(function (err) {
//   console.log('caught error', err.stack)
// }).then(function (result) {
//    console.log('data', result.data);
// });



// Routes
require('./controllers/index.js')(app);




// Start Server
app.listen(`${process.env.PORT}`, () => {
  console.log(`Listening on port localhost:${process.env.PORT}!`);
});

module.exports = app
