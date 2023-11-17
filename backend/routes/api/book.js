const express = require('express');
const Book = require('../../models/Book');
const uploadFile = require('../../utils/fileUpload');
const upload = require('../../middleware/multer');
const isVerified = require('../../middleware/isVerified');
const hasRoles = require('../../middleware/hasRoles');
const router = express.Router();

router.get('/', async (req, res) => {
  return res.sendStatus(204);
});

router.post('/', isVerified, hasRoles("seller"), upload.single('image'), async (req, res) => {
  if (req?.fileValidationError) return res.status(400).send(req?.fileValidationError.message);
  try {
    if (!req.file) {
      throw new Error('No files were uploaded');
    }
    const book = new Book(req.body);
    await book.validate();
    const imageURL = await uploadFile('assets/products', req.file);
    book.image = imageURL;
    await book.save();
    return res.send("Product created!")
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.patch('/:id', isVerified, hasRoles("seller"), async (req, res) => {
  const id = req.params.id;
  try {
    const { image, ...filtered } = req.body;
    await Book.findByIdAndUpdate(id, filtered, { runValidators: true });
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

router.get('/list', async (req, res) => {
  try {
    // const amount = parseInt(req.query.amount);
    // let list;
    // if (!amount) {
    //   list = await Book.find({}, 'name image rating price').exec();
    // } else {
    //   list = await Book.aggregate([
    //     {
    //       $project: {
    //         name: 1,
    //         image: 1,
    //         rating: 1,
    //         price: 1,
    //       }
    //     }
    //   ]).sample(amount);
    // }
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const list = await Book.paginate(
      {},
      { select: 'name image rating price', page, limit }
    );
    return res.send(list);
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

router.get('/get-detail/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findById(id).populate("seller", "name logo").exec();
    if (!book) throw new Error("Book doesn't exist!");
    return res.json(book);
  } catch(err) {
    return res.status(400).send(err.message);
  }
})

module.exports = router;
