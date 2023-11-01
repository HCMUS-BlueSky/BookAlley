const express = require('express');
const router = express.Router();
const authAPI = require('./api/auth');
const userAPI = require('./api/user');
const bookAPI = require('./api/book');
const cartAPI = require('./api/cart');
const reviewAPI = require('./api/review');

router.use('/auth', authAPI);
router.use('/user', userAPI);
router.use('/book', bookAPI);
router.use('/cart', cartAPI);
router.use('/review', reviewAPI);

module.exports = router;
