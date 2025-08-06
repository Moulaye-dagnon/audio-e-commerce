const router = require("express").Router();
const allHeadphones = require("../controllers/Headphone/Headphone");
const getHeadphoneItem = require("../controllers/Headphone/HeadphoneItem");
router.get("/headphones", allHeadphones);
router.get("/headphones/:slug", getHeadphoneItem);
module.exports = router;
