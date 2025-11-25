const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbConnection = require("./config/dbConnection");
const authRoutes = require("./routes/authRoutes");
const specsRoutes = require("./routes/specsRoutes");

const app = express();

//cors
app.use(cors({ origin: "http://localhost:3000", methods: ["GET", "POST"] }));

//type of the request
app.use(express.json());

//DB Connection
dbConnection();

//Routes
app.use("/auth", authRoutes);
app.use("/specs", specsRoutes);

//Server
const port = process.env.port || 5000;

app.listen(port, () => {
  console.log("listening " + port);
});
