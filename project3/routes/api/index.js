const router = require("express").Router();
const infoRoutes = require("./info");

// Book routes
router.use("/info", infoRoutes);

module.exports = router;