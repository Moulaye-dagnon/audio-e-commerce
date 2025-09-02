const auth = require("../../lib/auth");

const Session = async (req, res) => {
  try {
    const session = await auth.api.getSession({
      headers: await req.headers,
    });
    if (!session) {
      res.status(401).json({ message: "No session active " });
      return;
    }

    // const data =  session.session;
    return res.status(200).json(session);
  } catch (error) {
    console.log(error);

    res.status(401).json({ error: "Invalid session" });
  }
};
module.exports = Session;
