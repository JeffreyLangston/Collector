const express = require('express');
const mongoose = require('mongoose');
const Book = require('./api/models/bookModel');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/collectorDB');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const routes = require('./api/routes/bookRoutes');

routes(app);


app.listen(port);


console.log(`collector list RESTful API server started on: ${port}`);
