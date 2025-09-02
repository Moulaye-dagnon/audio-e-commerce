const router = require("express").Router();

const getUser = require("../controllers/users/getUser");

const userAuth = require("../middlewares/UserAuthentificate");
const Session = require("../controllers/auth/session");
router.get("/api/me", userAuth, getUser);
router.get("/api/me/session", userAuth, Session);
module.exports = router;
