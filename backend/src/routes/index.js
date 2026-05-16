const express = require('express');

const contactRoutes = require('./contactRoutes');
const healthRoutes = require('./healthRoutes');

const router = express.Router();

router.use('/contact', contactRoutes);
router.use('/health', healthRoutes);

module.exports = router;
