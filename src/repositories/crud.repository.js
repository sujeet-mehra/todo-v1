const pool = require("../config/database");
function crudRepository(tableName) {
  return {
    // data is an object with the fields to insert into the table
    create: async function (data) {
      try {
        const [result] = await pool.query(
          `INSERT INTO ${tableName} SET ?`,
          data
        );
        return result.insertId;
      } catch (error) {
        throw error;
      }
    },

    // findAll returns all rows from the table
    findAll: async function () {
      try {
        const [rows] = await pool.query(`SELECT * FROM ${tableName}`);
        return rows;
      } catch (error) {
        throw error;
      }
    },

    // findById returns a single row by id
    findById: async function (id) {
      try {
        const [rows] = await pool.query(
          `SELECT * FROM ${tableName} WHERE id = ?`,
          [id]
        );
        return rows[0];
      } catch (error) {
        throw error;
      }
    },

    // updateById updates a single row by id, data is an object with the fields to update
    updateById: async function (id, data) {
      const [result] = await pool.query(
        `UPDATE ${tableName} SET ? WHERE id = ?`,
        [data, id]
      );
      return result.affectedRows;
    },

    // deleteById deletes a single row by id
    deleteById: async function (id) {
      const [result] = await pool.query(
        `DELETE FROM ${tableName} WHERE id = ?`,
        [id]
      );
      return result.affectedRows;
    },
  };
}

module.exports = crudRepository;
