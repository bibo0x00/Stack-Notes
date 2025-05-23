import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { emailBody } from './emailBody.js'

dotenv.config()

const sendEmail = async (email) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'youssefalsaeedi5@gmail.com',
        pass: 'tytg ieli skhl mhuu'
      }
    });

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });
      console.log(token)
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: 'Verify your email',
      html: emailBody(token)
    });

    console.log('Email sent: ' + info.messageId);
  } catch (error) {
    console.error('Error sending email: ', error);
  }
};

export { sendEmail }
// import { emailBody } from './emailBody.js'
