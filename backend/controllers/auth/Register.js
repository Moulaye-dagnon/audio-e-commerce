const auth = require("../../lib/auth");

const Register = async (req, res) => {
  const { username, email, password } = req.body;
  const response = await auth.api.signUpEmail({
    body: {
      name: username,
      email: email,
      password: password,
    },
  });
  return res.json({ response });
};

module.exports = Register;
