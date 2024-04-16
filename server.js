const express = require("express");
const app = express();
const router = require("./routes/api-routes");
// ssh = 22
// ftp = 21
// http = 80
// https = 443
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use("/api", router);

// app.listen(3000);
app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
