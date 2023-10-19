const express = require('express');
const Book = require('../../models/Book');
const firebase = require('../../config/firebase');
const { getDownloadURL } = require('firebase-admin/storage');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const isAuth = require('../../middleware/isAuth');
const isAdmin = require('../../middleware/isAdmin');
const upload = require('../../middleware/multer')
const router = express.Router();

router.get('/', async (req, res) => {
  return res.sendStatus(204);
});

router.post('/', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      throw new Error('No files were uploaded');
    }
    const book = new Book(req.body);
    await book.validate();

    const filePath = `assets/products/${
      uuidv4() + path.extname(req.file.originalname)
    }`;
    const blob = firebase.bucket.file(filePath);
    
    const blobWriter = blob.createWriteStream({
      metadata: {
        contentType: req.file.mimetype
      }
    });

    blobWriter.on('error', (err) => {
      res.status(500).send('Something went wrong!')
    });

    blobWriter.on('finish', async () => {
      try {
        const downloadURL = await getDownloadURL(blob);
        book.image = downloadURL;
        await book.save();
        res.status(200).send('Product created!');
      } catch (err) {
        res.status(500).send(err.message);
      }
    });

    blobWriter.end(req.file.buffer);
    return;
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
    const list = await Book.find({}, 'name image image2 rating price').exec();
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
