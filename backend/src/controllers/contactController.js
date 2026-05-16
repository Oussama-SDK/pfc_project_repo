const Contact = require('../models/Contact');
const asyncHandler = require('../utils/asyncHandler');

function normalizeString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

const createContact = asyncHandler(async (req, res) => {
  const payload = {
    name: normalizeString(req.body.name),
    email: normalizeString(req.body.email),
    message: normalizeString(req.body.message),
  };

  if (!payload.name || !payload.email || !payload.message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const contact = await Contact.create(payload);
  return res.status(201).json({ success: true, data: contact });
});

const listContacts = asyncHandler(async (_req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  return res.json(contacts);
});

module.exports = {
  createContact,
  listContacts,
};
