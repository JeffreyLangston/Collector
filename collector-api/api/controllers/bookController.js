const mongoose = require('mongoose');

const Book = mongoose.model('Books');

exports.list_all_books = function bookController(req, res) {
  Book.find({}, (err, book) => {
    if (err) {
      res.send(err);
    }
    res.json(book);
  });
};


exports.create_a_book = function createBook(req, res) {
  const newBook = new Book(req.body);
  newBook.save((err, book) => {
    if (err) {
      res.send(err);
    }
    res.json(book);
  });
};


exports.read_a_book = function (req, res) {
  Book.findById(req.params.bookId, (err, book) => {
    if (err)
      {res.send(err);}
    res.json(book);
  });
};


exports.update_a_book = function (req, res) {
  Book.findOneAndUpdate(req.params.bookId, req.body, { new: true }, (err, book) => {
    if (err)
      {res.send(err);}
    res.json(book);
  });
};


exports.delete_a_book = function (req, res) {
  Book.remove({
    _id: req.params.bookId,
  }, (err, book) => {
    if (err)
      {res.send(err);}
    res.json({ message: 'Book successfully deleted' });
  });
};
