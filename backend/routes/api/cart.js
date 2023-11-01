const express = require('express');
const Cart = require('../../models/Cart');
const Book = require('../../models/Book');
const isVerified = require('../../middleware/isVerified');
const router = express.Router();

router.post('/add-item', isVerified, async (req, res) => {
  const user = req.user;
  const { product_id, quantity } = req.body;
  if (!product_id || typeof product_id !== 'string')
    return res.status(400).send('Invalid id!');
  if (!quantity || typeof quantity !== 'number')
    return res.status(400).send('Invalid quantity!');
  try {
    const product = await Book.findById(product_id).exec();
    if (!product) throw new Error('Product does not exist!');
    let cart = await Cart.findOne({ owner: user.id }).exec();
    if (!cart) {
      cart = new Cart({ owner: user.id });
    }
    const productIndex = cart.items.findIndex(
      (p) => p.product == product.id
    );
    if (productIndex > -1) {
      cart.items[productIndex].quantity += quantity;
    } else {
      cart.items.push({
        product: product.id,
        price: product.price,
        quantity: quantity
      });
    }
    await cart.save();
    return res.send('Item successfully added to cart!');
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get('/', isVerified, async (req, res) => {
  const user = req.user;
  try {
    const cart = await Cart.findOne({ owner: user.id })
      .populate('items.product', 'name image')
      .exec();
    return res.json(cart);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;