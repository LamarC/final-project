const router = require("express").Router();
const infoRoutes = require("./info");

// Routes
router.use("/info", infoRoutes);

module.exports = router;