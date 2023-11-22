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
  <!DOCTYPE html>
  <html
    lang="en"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    <head>
      <style>
        body {
          font-family: Montserrat, "Segoe UI", Roboto, "Open Sans",
            "Helvetica Neue", sans-serif;
          margin: 100;
          padding: 0;
          align-items: center;
          justify-content: center;
        }
        .container {
          max-width: 600px;
          margin: auto;
          padding: 20px;
          box-sizing: border-box;
        }
        .header {
          background-color: #587785;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5px;
          margin-bottom: 5px;
          border-radius: 5px;
        }
        .title {
          font-size: 30px;
          font-weight: 700;
          color: #ffffff;
          margin: 20px;
        }
        .content {
          background-color: #ffffff;
          margin-left: 20px;
          margin-right: 20px;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #587785;
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          border-radius: 5px;
          text-align: center;
        }
        .button:hover {
          background-color: #232f35;
          color: #fff;
        }
        .buttonContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 30px;
          margin-bottom: 30px;
        }
        .expiry {
          font-size: 14px;
          color: #666;
          margin-top: 10px;
        }
        .footer {
          font-size: 14px;
          line-height: 0.75;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <a href="https://book-alley.onrender.com/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bookalley-b6495.appspot.com/o/Logo.png?alt=media&token=30b9341e-ca14-41e4-81bc-e4001ee46a30"
              alt="BookAlley logo"
              width="100"
              height="100"
            />
          </a>
          <div class="title">Reset password</div>
        </div>
        <div class="content">
          <p>Please click the button below to reset the password.</p>
          <div class="buttonContainer">
            <a href="${encodeURI(resetLink)}" class="button">Reset password</a>
          </div>
          <div class="expiry">
            This link will expire in 24 hours. If it has expired, try to request a
            new verification email.
          </div>
          <div class="footer">
            <p>Thank you,</p>
            <b> The Book Alley team.</b>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;
  return template;
}

const genEmailConfirmTemplate = (confirmLink) => {
  const template = `
  <!DOCTYPE html>
  <html
    lang="en"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    <head>
      <style>
        body {
          font-family: Montserrat, "Segoe UI", Roboto, "Open Sans",
            "Helvetica Neue", sans-serif;
          margin: 100;
          padding: 0;
          align-items: center;
          justify-content: center;
        }
        .container {
          max-width: 600px;
          margin: auto;
          padding: 20px;
          box-sizing: border-box;
        }
        .header {
          background-color: #587785;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5px;
          margin-bottom: 5px;
          border-radius: 5px;
        }
        .title {
          font-size: 30px;
          font-weight: 700;
          color: #ffffff;
          margin: 20px;
        }
        .content {
          background-color: #ffffff;
          margin-left: 20px;
          margin-right: 20px;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #587785;
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          border-radius: 5px;
          text-align: center;
        }
        .button:hover {
          background-color: #232f35;
          color: #fff;
        }
        .buttonContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 30px;
          margin-bottom: 30px;
        }
        .expiry {
          font-size: 14px;
          color: #666;
          margin-top: 10px;
        }
        .footer {
          font-size: 14px;
          line-height: 0.75;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <a href="https://book-alley.onrender.com/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bookalley-b6495.appspot.com/o/Logo.png?alt=media&token=30b9341e-ca14-41e4-81bc-e4001ee46a30"
              alt="BookAlley logo"
              width="100"
              height="100"
            />
          </a>
          <div class="title">Verify your email address</div>
        </div>
        <div class="content">
          <p>Please verify your email address to complete your account.</p>
          <div class="buttonContainer">
            <a href="${encodeURI(confirmLink)}" class="button"
              >Verify email address</a
            >
          </div>
          <div class="expiry">
            This link will expire in 24 hours. If it has expired, try to request a
            new verification email.
          </div>
          <div class="footer">
            <p>Thank you,</p>
            <b> The Book Alley team.</b>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;
  return template;
}

module.exports = {
  sendEmail,
  genPasswordResetTemplate,
  genEmailConfirmTemplate,
};