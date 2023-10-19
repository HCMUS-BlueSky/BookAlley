const express = require('express');
const Book = require('../../models/Book');
const isAuth = require('../../middleware/isAuth');
const cloudinary = require('../../config/cloudinary');
const isAdmin = require('../../middleware/isAdmin');
const fs = require('fs')
const router = express.Router();

router.get('/', async (req, res) => {
  return res.sendStatus(204);
});

router.post('/', async (req, res) => {
  try {
    // if (!req.files || Object.keys(req.files).length === 0) {
    //   throw new Error('No files were uploaded');
    // }
    const book = await Book.findOne({name: req.body.name}).exec();
    // await book.validate();
    // const image = req.files.image;
    // const result = await cloudinary.uploader.upload(image.tempFilePath, {
    //   resource_type: 'image',
    //   folder: 'assets/products',
    //   unique_filename: true,
    //   allowed_formats: ['png', 'jpg', 'jpeg', 'webp']
    // });
    // fs.unlinkSync(image.tempFilePath);
    book.image2 = req.body.image2;
    // book.image = result.url;
    await book.save();
    return res.sendStatus(204);
  } catch (err) {
    return res.status(400).send(err.message);
  }
})

router.patch('/:id', isAdmin, async (req, res) => {
  const id = req.params.id;
  try {
    await Book.findByIdAndUpdate(id, req.body);
    return res.sendStatus(204);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get('/tags', async (req, res) => {
  try {
    const availableTags = {
      "tags": Book.getTagList()
    }
    return res.json(availableTags);
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

router.get('/list-brief', async (req, res) => {
  try {
    const list = await Book.find({}, 'name image rating price').exec();
    return res.send(list);
  } catch (err) {
    return res.status(500).send(err.message)
  }
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
