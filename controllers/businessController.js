const { Business } = require("../models");

exports.getAllBusinesses = async (req, res) => {
  try {
    const businesses = await Business.findAll();
    res.json(businesses);
  } catch (error) {
    console.error("Error fetching businesses:", error);
    res.status(500).json({ error: "Failed to fetch businesses" });
  }
};

exports.createBusiness = async (req, res) => {
  try {
    const { name, email_id, phone_no, location_id, registration_date } = req.body;

    const newBusiness = await Business.create({
      
      name,
      email_id,
      phone_no,
      location_id,
      registration_date
    });

    res.status(201).json(newBusiness);
  } catch (error) {
    console.error("Error creating business:", error);
    res.status(500).json({ error: "Failed to create business" });
  }
};
