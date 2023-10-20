const express = require('express');
const User = require('../../models/User');
const Review = require('../../models/Review');
const Book = require('../../models/Book');
const isVerified = require('../../middleware/isVerified');
const router = express.Router();

router.get('/:product_id', isVerified, async (req, res) => {
  const product_id = req.params.product_id;
  try {
    const product_existed = await Book.exists({ _id: product_id }).exec();
    if (!product_existed) throw new Error('Invalid id!');
    const reviews = await Review.find({ product_id }).exec();
    return res.json(reviews);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.post('/:product_id', isVerified, async (req, res) => {
  const product_id = req.params.product_id;
  const user = req.user;
  const { content, rating } = req.body;
  if (!content || typeof content !== 'string')
    return res.status(400).send('Missing content!');
  if (!rating || typeof rating !== 'number')
    return res.status(400).send('Missing rating!');
  try {
    const product_existed = await Book.exists({_id: product_id}).exec();
    if (!product_existed) throw new Error("Invalid id!");
    const review = new Review({
      user_id: user.id,
      product_id: product_id,
      content: content,
      rating: rating
    });
    await review.save();
    return res.send('Successfully added review!');
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
