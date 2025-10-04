const pool = require("../config/database");

const createUserTable = async () => {
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS USER (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(createTableSQL);
    console.log('✅ "user" table is ready.');
  } catch (err) {
    console.error('❌ Failed to create "user" table:', err.message);
  }
};

module.exports = createUserTable;
