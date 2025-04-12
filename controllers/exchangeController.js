const Exchange = require('../models/exchange'); // Adjust the path as necessary

// Controller to create a new exchange
exports.createExchange = async (req, res) => {
  try {
    // Check if req.body contains necessary fields
    if (!req.body || !req.body.supply_id || !req.body.demand_id || !req.body.status) {
      return res.status(400).json({ error: "supply_id, demand_id, and status are required" });
    }

    // Destructure necessary properties from req.body
    const { supply_id, demand_id, status, exchange_date } = req.body;

    // Log the received data (optional for debugging)
    console.log("Received supply_id:", supply_id);
    console.log("Received demand_id:", demand_id);
    console.log("Received status:", status);
    console.log("Received exchange_date:", exchange_date);

    // Create a new exchange
    const newExchange = await Exchange.create({
      supply_id,
      demand_id,
      status,
      exchange_date  // Include exchange_date if it is being passed
    });

    // Respond with success and the new exchange data
    res.status(201).json(newExchange);
  } catch (error) {
    console.error("Exchange creation error:", error);
    res.status(500).json({ message: "Failed to create exchange", error });
  }
};

// Controller to get all exchanges
exports.getAllExchanges = async (req, res) => {
  try {
    // Fetch exchanges with associated supply and demand details
    const exchanges = await Exchange.findAll({
      include: [
        {
          model: Supply,
          attributes: ['id', 'name']  // Adjust attributes as necessary
        },
        {
          model: Demand,
          attributes: ['id', 'description']  // Adjust attributes as necessary
        }
      ]
    });

    res.status(200).json(exchanges);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch exchanges", error });
  }
};
