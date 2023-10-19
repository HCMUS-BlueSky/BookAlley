const express = require('express');
const User = require('../../models/User');
const Cart = require('../../models/Cart');
const Book = require('../../models/Book');
const isAuth = require('../../middleware/isAuth');
const router = express.Router();

router.post('/add-item', isAuth, async (req, res) => {
  const user = req.user;
  const { product_id }= req.body
  if (!product_id || typeof product_id !== 'string') return res.status(400).send('Invalid id!');
  try {
    const product = await Book.findById(product_id).exec();
    if (!product) throw new Error("Product does not exist!");
    let cart = await Cart.findOne({owner: user.id}).exec();
    if (!cart) {
      cart = new Cart({owner: user.id});
    }
    const productIndex = cart.items.findIndex((p) => p.product_id == product.id);
    if (productIndex > -1) {
      cart.items[productIndex].quantity += 1;
    } else {
      cart.items.push({
        product_id: product.id,
        price: product.price,
        quantity: 1
      });
    }
    await cart.save();
    return res.send("Item successfully added to cart!");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});


module.exports = router;