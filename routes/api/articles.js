const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// matches with "/api/articles"
router.route("/")
    .get(articlesController.findAll)
    .post(articlesController.create);

// matches with "/api/articles/:id"
router.route("/:id")
    .get(articlesController.findById)
    .put(articlesController.update)
    .delete(articlesController.remove);

module.exports = router;