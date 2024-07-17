// email-sender.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'benimiansi44@gmail.com',
    pass: 'ScarBeniMiansi'
  }
});

const mailOptions = {
  from: 'benimiansi44@gmail.com',
  to: 'recipient-email@gmail.com',
  subject: 'Test Email from Node.js',
  text: 'Hello, this is a test email from your Node.js application!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
