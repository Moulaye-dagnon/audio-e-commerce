const auth = require("../lib/auth");
const { fromNodeHeaders } = require("better-auth/node");
//import { fromNodeHeaders } from "better-auth/node";
module.exports = async (req, res, next) => {
  try {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });
    if (!session) {
      return res.status(401).json({ error: "Authentication est requie" });
    }
    req.user = session?.user;
    req.session = session?.session;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Invalid session" });
  }
};
