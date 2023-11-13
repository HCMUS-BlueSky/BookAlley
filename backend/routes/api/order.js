const express = require('express');
const Voucher = require('../../models/Voucher');
const Book = require('../../models/Book');
const Address = require('../../models/Address');
const Order = require('../../models/Order');
const isVerified = require('../../middleware/isVerified');
const router = express.Router();

router.post('/', isVerified, async (req, res) => {
  const user = req.user;
  const { voucher, items, shipping_info, shipping_method } = req.body;
  if (!shipping_info || typeof shipping_info !== 'string')
    return res.status(400).send('Invalid address ID!');
  if (!shipping_method || typeof shipping_method !== 'string')
    return res.status(400).send('Invalid shipping method!');
  if (!items || !Array.isArray(items))
    return res.status(400).send('Invalid items!');
  try {
    if(!(await Address.exists({ _id: shipping_info }))) throw new Error('Invalid address ID!');
    let sub_total = 0, total;
    for(const item of items) {
      if (!item.product || typeof item.product !== 'string' || !item.quantity || typeof item.quantity !== 'number' || item.quantity < 1) throw new Error('Invalid products!');
      const product = await Book.findById(item.product).exec();
      if (!product) throw new Error('Invalid products!'); 
      item.quantity = parseInt(item.quantity);
      sub_total += product.price * item.quantity;
    }
    if (voucher) {
      if (typeof voucher !== 'string') throw new Error('Invalid voucher');
      const voucherItem = await Voucher.findById(voucher).select("quantity").exec();
      if (!voucherItem) throw new Error('Invalid voucher!');
      if (voucherItem.quantity < 1) throw new Error('Invalid voucher!');
      total = sub_total * (1 - voucherItem.discount);
    }
    else {
      total = sub_total;
    }
    const order = new Order({
      owner: user.id,
      items,
      shipping_info,
      voucher,
      shipping_method,
      sub_total,
      total
    });
    await order.save();
    return res.sendStatus(204);
  } catch (err) {
    return res.status(400).send(err.message);
  }
})

module.exports = router;
