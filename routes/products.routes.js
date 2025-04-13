const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts } = require('../controllers/productController');

// POST route for creating a product
router.post('/', createProduct);

// GET route for fetching all products
router.get('/', getAllProducts);

module.exports = router;
