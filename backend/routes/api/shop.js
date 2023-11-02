const express = require('express');
const User = require('../../models/User');
const Shop = require('../../models/Shop');
const Book = require('../../models/Book');
const hasRoles = require('../../middleware/hasRoles');
const router = express.Router();

router.get('/', hasRoles('admin'), async (req, res) => {
  try {
    const shops = await Shop.find({}).exec();
    return res.json(shops);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get('/:shop_id', async (req, res) => {
  try {
    const shop_id = req.params.shop_id;
    const shops = await Shop.findById(shop_id)
      .populate('listings', 'name image rating price')
      .exec();
    return res.json(shops);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get('/:shop_id/products', async (req, res) => {
  try {
    const shop_id = req.params.shop_id;
    const shops = await Shop.findById(shop_id)
      .populate('listings', 'name image rating price')
      .select('listings')
      .exec();
    return res.json(shops);
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
