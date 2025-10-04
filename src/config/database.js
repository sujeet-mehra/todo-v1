const mysql = require("mysql2");

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});


// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Error connecting to the database:', err.message);
  } else {
    console.log('✅ Database connected successfully with connectionId:', connection.threadId);
    connection.release(); // release the connection back to the pool
  }
});


module.exports = pool.promise();
