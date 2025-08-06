const router = require("express").Router();
const allEarphone = require("../controllers/Earphones/Earphone");
const getEarphoneItem = require("../controllers/Earphones/EarphoneItem");
router.get("/earphones", allEarphone);
router.get("/earphones/:slug", getEarphoneItem);
module.exports = router;
