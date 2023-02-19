const express = require("express");
const {
  getAllCSS,
  createCSS,
  getSingleCSS,
  deleteCSS,
} = require("../controllers/CSSController");

const router = express.Router();

router.route("/designs").get(getAllCSS);
router.route("/design/new").post(createCSS);
router.route("/design/:id").get(getSingleCSS);
router.route("/design/:id").delete(deleteCSS);

module.exports = router;
