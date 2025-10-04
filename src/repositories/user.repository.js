const pool = require("../config/database");
const crudRepository = require("./crud.repository");

const userRepository = { ...crudRepository("user"), 

    checkUserByEmail: async function(email){
        const [rows] = await pool.query(
            `SELECT * FROM user WHERE email = ?`,
            [email]
        );
        return rows[0];
    }

};

module.exports = userRepository;