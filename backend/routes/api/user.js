const express = require('express');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const isAuth = require('../../middleware/isAuth');
const sendEmail = require('../../utils/sendEmail');
const router = express.Router();

router.post('/', isAuth, async (req, res) => {
  const user = req.user;
  return res.status(200).json(user);
});

router.post('/send-verify-email', isAuth, async (req, res) => {
  try {
    const verifyToken = jwt.sign(
      {
        id: req.user.id
      },
      process.env.VERIFY_TOKEN_SECRET,
      {
        expiresIn: '1d'
      }
    );
    const verifyLink = `http://${process.env.FE_HOST}/verify?token=${verifyToken}`
    await sendEmail(req.user.email, 'VERIFY EMAIL', verifyLink);
    return res.send('Email verification link sent to your email account!');
  } catch (err) {
    return res.status(400).send(err.message);
  }
})

router.post('/verify', async (req, res) => {
  const { token } = req.body;
  if(!token || typeof token !== 'string') return res.status(400).send('Invalid token!');
  jwt.verify(token, process.env.VERIFY_TOKEN_SECRET, async (err, decoded) => {
    try {
      if (err) throw new Error('Invalid token!');
      const user = User.findById(decoded.id).exec();
      if (!user) throw new Error('Something went wrong!');
      if (user.verified) throw new Error('Email already verified!');
      user.verified = true;
      await user.save();
      return res.send('Email successfully verified!');
    } catch (err) {
      return res.status(400).send(err.message);
    }
  });
})

module.exports = router;
