const dotenv = require("dotenv");
const {PrismaClient} = require("@prisma/client");

dotenv.config();

const DATABASE_URI = process.env.DATABASE_URL;

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URI,
    },
  },
});

module.exports = {prisma};