const express = require('express');
const Book = require('../../models/Book');
const jwt = require('jsonwebtoken');
const isAuth = require('../../middleware/isAuth');
const isAdmin = require('../../middleware/isAdmin');
const router = express.Router();

router.get('/', async (req, res) => {
  return res.sendStatus(204);
});

router.post('/add', isAdmin, async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    return res.sendStatus(204);
  } catch (err) {
    return res.status(400).send(err.message);
  }
})

router.get('/list-brief', async (req, res) => {
  const list = await Book.find({}, 'name image rating price').exec();
  return res.send(list);
})

router.get('/get-detail/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findById(id).exec();
    if (!book) throw new Error("Book doesn't exist!");
    return res.json(book);
  } catch(err) {
    return res.status(400).send(err.message);
  }
})

module.exports = router;
