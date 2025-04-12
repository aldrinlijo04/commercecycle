const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
const path = require("path");

// Use absolute path to .env file
dotenv.config({ path: path.resolve(__dirname, "../.env") });

console.log("🛠 DB_USER:", process.env.DB_USER);
console.log("🛠 DB_PASSWORD set?", process.env.DB_PASSWORD ? "✅ Yes" : "❌ No");

const sequelize = new Sequelize(
    process.env.DB_NAME || "commercecycle",
    process.env.DB_USER || "gajus",
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST || "localhost",
        dialect: "mysql",
        port: process.env.DB_PORT || 3306,
        logging: false,
    }
);

module.exports = sequelize;