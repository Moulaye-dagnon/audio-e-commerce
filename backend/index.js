const { PrismaClient } = require("./generated/prisma/client");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const { toNodeHandler } = require("better-auth/node");
const auth = require("./lib/auth");
const authHandle = toNodeHandler(auth);
const Headphone = require("./routes/Headphone");
const EarPhone = require("./routes/Earphone");
const Speaker = require("./routes/Speaker");
const getHeaders = require("./utils/getHeaders");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const port = process.env.PORT || 3000;
console.log(port);

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Trust proxy for accurate IP addresses
app.set("trust proxy", 1);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}
app.all("/api/auth/:splat*", (req, res) => {
  console.log(`🔐 BetterAuth handling: ${req.method} ${req.url}`);
  console.log("🔐 Request body:", req.body);
  authHandle(req, res).catch((err) => {
    console.error("BetterAuth handler error:", err);
    res.status(500).json({ error: "Internal auth error" });
  });
});

app.use(express.json());

app.use("", Headphone);
app.use("", EarPhone);
app.use("", Speaker);
app.use("", authRoute);
app.use("", usersRoute);

app.listen(port, () => {
  console.log(`Votre server est lancé sur le port ${port}`);
});
