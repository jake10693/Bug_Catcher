const router = require("express").Router();
const bugController = require("../../controllers/bugController");

// Matches with "/api/bugs"
router.route("/")
  .get(bugController.findAll)
  .post(bugController.create);

// Matches with "/api/bugs/:id"
router
  .route("/:id")
  .get(bugController.findById)
  .put(bugController.update)
  .delete(bugController.remove);

module.exports = router;
