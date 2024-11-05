const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'nischalshakya55@gmail.com',
    pass: 'kvii sigx ghll nnsd'    
  }
});

// Function to send OTP
const sendOtpEmail = async (toEmail, otp) => {
  const mailOptions = {
    from: 'nischalshakya55@gmail.com',
    to: toEmail,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`OTP email sent to ${toEmail}`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendOtpEmail;
