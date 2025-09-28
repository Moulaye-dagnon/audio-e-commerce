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
  advanced: {
    // crossSubDomainCookies: {
    //   enabled: true,
    //   domain: process.env.COOKIE_DOMAIN || undefined,
    // },
    defaultCookieAttributes: {
      sameSite: "none",
      secure: true,
    },
    useSecureCookies: process.env.NODE_ENV === "production",
  },

  trustedOrigins: [
    "http://localhost:5173",
    "https://moulaye-audio-e-commerce.vercel.app",
  ],
});

module.exports = auth;
