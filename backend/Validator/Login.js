const { body } = require("express-validator");

const LoginValidator = [
  body("email").isEmail().notEmpty().withMessage("Email doit etre definis"),
  body("password")
    .isString()
    .isLength({ min: 8 })
    .notEmpty()
    .withMessage("Le mot de passe doit etre minimum 8 "),
];
module.exports = LoginValidator;
