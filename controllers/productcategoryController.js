const ProductCategory = require('../models/productcategory');

// Create a new product category
exports.createCategory = async (req, res) => {
  try {
    const { category_name } = req.body;

    if (!category_name) {
      return res.status(400).json({ error: "category_name is required" });
    }

    const newCategory = await ProductCategory.create({ category_name });

    res.status(201).json(newCategory);
  } catch (error) {
    console.error("Category creation error:", error);
    res.status(500).json({ message: "Failed to create category", error });
  }
};

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await ProductCategory.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch categories", error });
  }
};
