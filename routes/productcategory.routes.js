const express = require('express');
const router = express.Router();
const { createCategory, getAllCategories } = require('../controllers/productcategoryController');

router.post('/', createCategory);
router.get('/', getAllCategories);

module.exports = router;
