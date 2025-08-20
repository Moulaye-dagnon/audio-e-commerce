const Register = require("../controllers/auth/Register");

const router = require("express").Router();

router.post("/api/test-sign", Register);

module.exports = router;
