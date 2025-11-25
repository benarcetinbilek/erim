require("dotenv").config();
const mongoose = require("mongoose");

const dbConnection = async () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(console.log("connected to db"))
    .catch((e) => {
      console.log(e);
      process.exit();
    });
};

module.exports = dbConnection;
