const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASS
  }
});


const sendEmail = async (email, subject, content) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    html: content
  };
  await transporter.sendMail(mailOptions);
};

const genPasswordResetTemplate = (resetLink) => {
  const template = `
  <p>Click the button below to reset your password!</p>
  <a href="${encodeURI(resetLink)}" style="padding:8px 16px;background-color:#A0C3D2;">Reset password</a>
  `;
  return template;
}

const genEmailConfirmTemplate = (confirmLink) => {
  const template = `
  <p>Click the button below to verify your email!</p>
  <a href="${encodeURI(confirmLink)}" style="padding:8px 16px;background-color:#A0C3D2;">Verify email</a>
  `;
  return template;
}

module.exports = {
  sendEmail,
  genPasswordResetTemplate,
  genEmailConfirmTemplate,
};