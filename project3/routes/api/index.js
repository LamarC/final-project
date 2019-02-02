const router = require("express").Router();
const auroraRoutes = require("./aurora");

// Book routes
router.use("/aurora", auroraRoutes);

module.exports = router;