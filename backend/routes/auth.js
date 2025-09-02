const Login = require("../controllers/auth/Login");
const Register = require("../controllers/auth/Register");
const Session = require("../controllers/auth/session");
const LoginValidator = require("../Validator/Login");
const RegisterValidator = require("../Validator/RegisterValidator");
const valideResult = require("../Validator/ValidResuf");

const router = require("express").Router();

router.post("/auth/sign-up", RegisterValidator, valideResult, Register);
router.post("/auth/sign-in", LoginValidator, valideResult, Login);
router.get("/auth/session", Session);

module.exports = router;
