const Product = require('../models/product'); // Adjust the path as necessary

// Controller to create a new product
exports.createProduct = async (req, res) => {
  try {
    // Check if req.body contains necessary fields
    if (!req.body || !req.body.name || !req.body.description || !req.body.category_id) {
      return res.status(400).json({ error: "name, description, and category_id are required" });
    }

    // Destructure necessary properties from req.body
    const { name, description, category_id } = req.body;

    // Create a new product
    const newProduct = await Product.create({
      name,
      description,
      category_id
    });

    // Respond with success and the new product data
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Product creation error:", error);
    res.status(500).json({ message: "Failed to create product", error });
  }
};

// Controller to get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products", error });
  }
};
