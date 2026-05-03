const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const { protect, adminOnly } = require('../middleware/auth');

const sendEmail = async ({ name, email, subject, message }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  await transporter.sendMail({
    from: `"Mech Auto Dynamics" <${process.env.FROM_EMAIL}>`,
    to: process.env.TO_EMAIL,
    subject: `New Inquiry: ${subject}`,
    html: `
      <h2>New Contact Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  });
};

// POST /api/contact
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('subject').notEmpty().withMessage('Subject is required'),
    body('message').isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ success: false, errors: errors.array() });

    const { name, email, phone, subject, message } = req.body;
    try {
      const inquiry = await Contact.create({ name, email, phone, subject, message });

      // Send email (non-blocking — don't fail if email fails)
      sendEmail({ name, email, subject, message }).catch((err) =>
        console.error('Email send error:', err.message)
      );

      res.status(201).json({ success: true, message: 'Inquiry submitted successfully!', inquiry });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
);

// GET /api/contact  (admin — view all inquiries)
router.get('/', protect, adminOnly, async (req, res) => {
  try {
    const { isRead, page = 1, limit = 20 } = req.query;
    const query = isRead !== undefined ? { isRead: isRead === 'true' } : {};
    const total = await Contact.countDocuments(query);
    const inquiries = await Contact.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json({ success: true, total, inquiries });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PUT /api/contact/:id/read  (admin)
router.put('/:id/read', protect, adminOnly, async (req, res) => {
  try {
    const inquiry = await Contact.findByIdAndUpdate(req.params.id, { isRead: true }, { new: true });
    res.json({ success: true, inquiry });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
