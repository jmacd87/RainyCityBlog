// import { Router, Request, Response } from 'express';
// // import nodemailer from 'nodemailer';

// const emailRouter = Router();

// emailRouter.post('/send-email', async (req: Request, res: Response) => {
//   const { email, message } = req.body;

//   try {
//     if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
//       throw new Error(
//         'Email credentials are not set in environment variables.'
//       );
//     }

//     const transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: email,
//       to: process.env.EMAIL_USER,
//       subject: 'New Contact Form Message',
//       text: message,
//     };

//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Email sent successfully!' });
//   } catch (error: any) {
//     console.error('Error sending email:', error); // Log the error
//     res.status(500).json({ error: error.toString() });
//   }
// });

// export default emailRouter;
