const getUser = (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(401).json({ error: "User not authenticated" });
  }
  return res.status(200).json({
    message: "Data user",
    user: user,
  });
};
module.exports = getUser;
