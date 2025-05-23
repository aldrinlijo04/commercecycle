
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

// demand
const bodyParser = require("body-parser");
const demandRoutes = require("../routes/demand.routes");

<<<<<<< HEAD
// product
const productRoutes = require("../routes/products.routes");
app.use("/api/products", productRoutes);

// product category
const productCategoryRoutes = require("../routes/productcategory.routes");
app.use("/api/productcategories", productCategoryRoutes);
=======
//location
const locationRoutes = require("../routes/location.routes");
app.use("/api/locations", locationRoutes);

// tag
const tagRoutes = require("../routes/tag.routes");
app.use("/api/tags", tagRoutes);

>>>>>>> 677034f0bdfed7839b8bfd14607044a27c221ac5


app.use(bodyParser.json()); // Parse incoming JSON data
app.use("/api/demands", demandRoutes); // Add demand routes

// Load and test DB connection
require("../models"); 

// Root Route
app.get("/", (req, res) => {
  res.send("Server is running with Sequelize connected!");
});

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});

