const express = require("express");
const app = express();
const router = require("./routes/api-routes");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

// ssh = 22
// ftp = 21
// http = 80
// https = 443
const port = process.env.PORT || 3000;

// console.log(process.env);

// Middleware
app.use(express.json());
app.use("/api", router);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas db!");

    // app.listen(3000);
    app.listen(port, () => {
      console.log(`Server is listening on port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("Connection to MongoDB failed!", error);
  });
