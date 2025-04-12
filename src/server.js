
require('dotenv').config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// supply
const supplyRoutes = require("../routes/supply.routes");
app.use("/api/supplies", supplyRoutes);

// business
const businessRoutes = require("../routes/business.routes");
app.use("/api/businesses", businessRoutes);
// exchange
const exchangeRoutes = require("../routes/exchange.routes");
app.use("/api/exchange", exchangeRoutes);

// Load and test DB connection
require("../models"); 

// Root Route
app.get("/", (req, res) => {
  res.send("Server is running with Sequelize connected!");
});

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});

