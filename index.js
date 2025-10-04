require("dotenv").config();
const express = require("express");
const app = express();
const config = require("./src/config");
const routes = require("./src/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(config.SERVER_PORT, () => {
  console.log(`Todo app listening on port http://localhost:${config.SERVER_PORT}`);
});
