const express = require('express');
const router = express.Router();
const { createExchange, getAllExchanges } = require('../controllers/exchangeController');

// POST route for creating an exchange
router.post('/', createExchange);

// GET route for fetching all exchanges
router.get('/', getAllExchanges);

module.exports = router;
