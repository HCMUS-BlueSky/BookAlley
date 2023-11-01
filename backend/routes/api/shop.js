const express = require('express');
const User = require('../../models/User');
const Shop = require('../../models/Shop');
const Book = require('../../models/Book');
const hasRoles = require('../../middleware/hasRoles');
const router = express.Router();

router.get('/', hasRoles('admin'), async (req, res) => {
  try {
    const shopes = await Shop.find({}).exec();
    return res.json(shopes);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// router.post('/', hasRoles('admin'), async (req, res) => {
//   const {name, owner, description} = req.body;
//   try {
//     const seller = await User.find({ _id: owner, role: 'seller' }).exec();
//     if (!seller) throw new Error("Seller not found!");
//     const shop = new Shop({ name, owner, description });

//     const books = await Book.find({}).select("id").exec();
//     for (let i = 66; i < 93; ++i) {
//       shop.listings.push(books[i]._id);
//       await Book.findByIdAndUpdate(books[i]._id, {seller: shop._id}).exec();
//     }
//     await shop.save();
//     return res.sendStatus(204);
//   } catch (err) {
//     return res.status(400).send(err.message);
//   }
// });

module.exports = router;
