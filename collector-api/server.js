const express = require('express');
const mongoose = require('mongoose');
const Mongod = require('mongod');
const Book = require('./api/models/bookModel');
const bodyParser = require('body-parser');
const chalk = require('chalk');


const app = express();
const port = process.env.PORT || 3001;
console.log(chalk.blue('starting...'));


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/collectorDB', {
  socketTimeoutMS: 10,
  keepAlive: true,
  reconnectTries: 3,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/bookRoutes');

routes(app);

app.listen(port);

console.log(`collector list RESTful API server started on: ${port}`);
