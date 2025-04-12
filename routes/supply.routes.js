const express = require("express");
const router = express.Router();
const supplyController = require("../controllers/supplyController");

// Route to get all supplies
router.get("/", supplyController.getAllSupplies);

// Route to create a new supply listing
router.post("/", supplyController.createSupply);

module.exports = router;
