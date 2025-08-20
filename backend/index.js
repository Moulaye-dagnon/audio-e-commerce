const { PrismaClient } = require("./generated/prisma/client");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const { toNodeHandler } = require("better-auth/node");
const auth = require("./lib/auth");
const Headphone = require("./routes/Headphone");
const EarPhone = require("./routes/Earphone");
const Speaker = require("./routes/Speaker");
const getHeaders = require("./utils/getHeaders");
const authRoute = require("./routes/auth");
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
app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());

app.use("", Headphone);
app.use("", EarPhone);
app.use("", Speaker);
app.use("", authRoute);

const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log(`Votre server est lancé sur le port ${port}`);
});
