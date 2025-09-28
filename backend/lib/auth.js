const { betterAuth } = require("better-auth");
const { prismaAdapter } = require("better-auth/adapters/prisma");
const prisma = require("../prisma/index");
const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "mongodb",
  }),
  logger: {
    level: "debug",
    disabled: false,
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },

  session: {
    expiresIn: 60 * 60 * 24,
    updateAge: 60 * 60 * 6,
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
    },
  },
  trustedOrigins: [
    "http://localhost:5173",
    "https://moulaye-audio-e-commerce.vercel.app",
  ],
});

module.exports = auth;
