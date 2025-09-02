const { PrismaClient } = require("../generated/prisma/client");

const prisma = new PrismaClient({
  log: ["error", "warn", "query", "info"],
});

module.exports = prisma;
