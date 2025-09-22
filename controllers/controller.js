const HealthCheck = require("../models/healthModel.js");
const { log } = require("console");

// API Should be called with empty payload & no query parameters
exports.healthCheck = async (req, res) => {
    if((req.body && Object.keys(req.body).length !== 0 )|| 
        (req.query && Object.keys(req.query).length !== 0)){
        console.error("Invalid Payload");
        res.set("Cache-Control", "no-cache");
        return res.status(400).send();
    }
// Create a new health check entry if database is available
    try {
        await HealthCheck.create({});
        console.log("Health-Check Success");
        res.set("Cache-Control", "no-cache");
        return res.status(200).send();
    } catch (error) {
        console.error("Health-Check Failed:", error);
        res.set("Cache-Control", "no-cache");
        return res.status(503).send();
    }
};

//unsupported methods
exports.handleUnsupportedMethods = (req, res) => {
    console.error("Health-Check Unsupported Method");
    res.set("Cache-Control", "no-cache");
    return res.status(405).send();
};


