require("dotenv").config();
const express = require("express");
const routes = require("./routes/route");
const sequelize = require("./config/config");

const app = express();
const PORT = process.env.PORT;

if (!PORT) {
    console.error("Missing required environment variable: PORT");
    process.exit(1);
}

// Middleware
app.use(express.json());

// Routes
app.use("/", routes);



(async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync(); // auto-create/adjust tables
        console.log("Database connected & synced.");

        const server = app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
            });
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
})();