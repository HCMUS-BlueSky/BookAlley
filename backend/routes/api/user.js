const express = require('express');
const User = require('../../models/User');
const isAuth = require('../../middleware/isAuth');
const router = express.Router();

router.post('/', isAuth, async (req, res) => {
  const user = req.user;
  return res.status(200).json(user);
});

router.post('/verify', async (req, res) => {
  return res.sendStatus(204);
})
module.exports = router;
