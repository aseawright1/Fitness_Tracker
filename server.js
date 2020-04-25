const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const PORT = process.env.PORT || 3600;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout',
{ useNewUrlParser: true });

// routes
app.use(require('./routes/api-routes.js'));
app.use(require('./routes/html-routes.js'));

// server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
