const pool = require("../config/database");

const createTodoTable = async () => {
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS todos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      completed BOOLEAN NOT NULL DEFAULT false,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(createTableSQL);
    console.log('✅ "todos" table is ready.');
  } catch (err) {
    console.error('❌ Failed to create "todos" table:', err.message);
  }
};

module.exports = createTodoTable;
