const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    Required: 'Kindly enter the title of the book',

  },
  author: {
    type: String,

  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  own: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Books', BookSchema);
