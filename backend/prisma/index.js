const { PrismaClient } = require("../generated/prisma/client");

const prisma = new PrismaClient({
  log: ["error", "warn", "info"],
});

module.exports = prisma;
