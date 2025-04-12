
require('dotenv').config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const supplyRoutes = require("../routes/supply.routes");
app.use("/api/supplies", supplyRoutes);
// Load and test DB connection
require("../models"); 

// Root Route
app.get("/", (req, res) => {
  res.send("Server is running with Sequelize connected!");
});

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});