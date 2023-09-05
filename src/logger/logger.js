const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: "errors.log", level: "warn" }),
    new winston.transports.File({ filename: "messages.log" }),
  ],
});

module.exports = logger;
