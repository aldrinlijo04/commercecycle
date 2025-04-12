const { Demand } = require("../models");

exports.getAllDemands = async (req, res) => {
  try {
    const demands = await Demand.findAll();
    res.json(demands);
  } catch (error) {
    console.error("Error fetching demands:", error);
    res.status(500).json({ error: "Failed to fetch demands" });
  }
};

exports.createDemand = async (req, res) => {
  try {
    const { business_id, product_id, quantity_needed, unit, needed_by } = req.body;

    const newDemand = await Demand.create({
      business_id,
      product_id,
      quantity_needed,
      unit,
      needed_by
    });

    res.status(201).json(newDemand);
  } catch (error) {
    console.error("Error creating demand:", error);
    res.status(500).json({ error: "Failed to create demand" });
  }
};
