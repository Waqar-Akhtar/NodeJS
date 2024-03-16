const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Welcome Ec2  Instance");
});
app.get("/hello", (req, res) => {
  res.send("Hello Ec2  Instance");
});
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
