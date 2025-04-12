const { Supply } = require("../models");

// Get all supplies
exports.getAllSupplies = async (req, res) => {
  try {
    const supplies = await Supply.findAll();
    res.status(200).json(supplies);
  } catch (error) {
    console.error("Error fetching supplies:", error);
    res.status(500).json({ error: "Failed to fetch supplies" });
  }
};

// Create a new supply listing
exports.createSupply = async (req, res) => {
    console.log("Received supply data:", req.body);
  try {
    const { business_id, product_id, quantity, unit, available_from, available_to } = req.body;
    const newSupply = await Supply.create({
      business_id,
      product_id,
      quantity,
      unit,
      available_from,
      available_to,
    });
    res.status(201).json(newSupply);
  } catch (error) {
    console.error("Error creating supply:", error);
    res.status(500).json({ error: "Failed to create supply" });
  }
};
