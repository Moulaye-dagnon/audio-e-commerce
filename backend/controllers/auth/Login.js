const auth = require("../../lib/auth");

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await auth.api.signInEmail({
      body: {
        email: email,
        password: password,
      },
      asResponse: true,
    });
    const data = await response.json();
    res.header(response.headers);
    return res.status(response.status).json({ data: data });
  } catch (error) {
    console.error("Login error:", error);
    return res
      .status(500)
      .json({ error: "Login failed", details: error.message });
  }
};

module.exports = Login;
