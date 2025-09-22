const express = require('express');
const router = express.Router();
const healthController = require("../controllers/controller");

// Routes
router.head("/healthz", healthController.handleUnsupportedMethods);
router.get("/healthz", healthController.healthCheck);
router.all("/healthz", healthController.handleUnsupportedMethods);

module.exports = router;