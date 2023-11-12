const express = require('express');
const Shop = require('../../models/Shop');
const hasRoles = require('../../middleware/hasRoles');
const isVerified = require('../../middleware/isVerified');
const router = express.Router();

router.get('/', hasRoles('admin'), async (req, res) => {
  try {
    const shops = await Shop.find({}).exec();
    return res.json(shops);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get('/get-detail', isVerified, hasRoles('seller', 'admin'), async (req, res) => {
  try {
    const seller = req.user;
    const shop = await Shop.findOne({owner: seller.id})
      .populate('listings', 'name image rating price')
      .exec();
    return res.json(shop);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get('/get-detail/:shop_id', async (req, res) => {
  try {
    const shop_id = req.params.shop_id;
    const shop = await Shop.findById(shop_id)
      .populate('listings', 'name image rating price')
      .exec();
    return res.json(shop);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// router.post('/products', isVerified, hasRoles('seller'), async (req, res) => {
//   try {
//     const user = req.user;
//     console.log(user._id);
//     const products = await Shop.find({owner: user._id})
//       .populate('listings', 'name image rating price')
//       .select('listings')
//       .exec();
//     return res.json(products);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });
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
