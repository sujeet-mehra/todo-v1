const crudRepository = require("./crud.repository");

const todoRepository = { ...crudRepository("user") };


module.exports = todoRepository;