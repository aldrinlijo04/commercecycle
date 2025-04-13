const { Location } = require("../models");

// GET all locations
exports.getAllLocations = async (req, res) => {
  try {
    const locations = await Location.findAll();
    res.status(200).json(locations);
  } catch (error) {
    console.error("Error fetching locations:", error);
    res.status(500).json({ error: "Failed to fetch locations" });
  }
};

// POST create new location
exports.createLocation = async (req, res) => {
  try {
    const { city, state, country, postal_code } = req.body;

    const newLocation = await Location.create({
      city,
      state,
      country,
      postal_code
    });

    res.status(201).json(newLocation);
  } catch (error) {
    console.error("Error creating location:", error);
    res.status(500).json({ error: "Failed to create location" });
  }
};
