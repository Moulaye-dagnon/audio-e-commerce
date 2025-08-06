const router = require("express").Router();
const allSpeakers = require("../controllers/Speaker/Speaker");
const getSpeakersItem = require("../controllers/Speaker/speakerItem");
router.get("/speakers", allSpeakers);
router.get("/speakers/:slug", getSpeakersItem);
module.exports = router;
