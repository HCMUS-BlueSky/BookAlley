const express = require('express');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const isAuth = require('../../middleware/isAuth');
const upload = require('../../middleware/multer');
const uploadFile = require('../../utils/fileUpload');
const { sendEmail, genEmailConfirmTemplate} = require("../../utils/sendEmail");
const router = express.Router();

router.get('/', isAuth, async (req, res) => {
  const user = req.user;
  return res.status(200).json(user);
});

router.patch('/', isAuth, upload.single("avatar"), async (req, res) => {
  const user = req.user;
  const {username, phone, birthdate} = req.body;
  let avatar;
  try {
    if(req.file) {
      avatar = await uploadFile(`assets/users/${user.id}/avatar`, req.file);
    }
    await User.findByIdAndUpdate(user.id, {
      username,
      phone,
      birthdate,
      avatar
    });
    return res.sendStatus(204);
  } catch (err) {
    return res.status(400).send(err.message);
  }
})

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
    await sendEmail(req.user.email, 'VERIFY EMAIL', genEmailConfirmTemplate(verifyLink));
    return res.send('A verification link has been sent to your email account!');
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
