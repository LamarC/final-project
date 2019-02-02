const router = require("express").Router();
const auroraController = require("../../controllers/auroraController");

// Matches with "/api/books"
router
  .route("/")
  .get(auroraController.findAll)
  .post(auroraController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(auroraController.findById)
  .put(auroraController.update)
  .delete(auroraController.remove);

module.exports = router;
