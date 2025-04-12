const express = require("express");
const router = express.Router();
const demandController = require("../controllers/demandController");

router.get("/", demandController.getAllDemands);
router.post("/", demandController.createDemand);

module.exports = router;
