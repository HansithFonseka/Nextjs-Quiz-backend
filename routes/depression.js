const express = require('express');
const router = express.Router();
const { calculateDepression } = require('../controllers/depressionController');

router.post('/calculate', calculateDepression);

module.exports = router;
