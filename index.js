require("dotenv").config();
const express = require("express");
const morgan = require('morgan')
const app = express();
const config = require("./src/config");
const apiRoutes = require("./src/routes");

// const { createTodoTable, createUserTable } = require("./src/schemas");
// Create tables if they don't exist
// createUserTable();
// createTodoTable();

// middlewares
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Internal Server Error!')
})

app.listen(config.SERVER_PORT, () => {
  console.log(`Todo app listening on port http://localhost:${config.SERVER_PORT}`);
});
