require('dotenv').config();
const { Pool } = require('pg');

let userPool = new Pool({
  connectionString: process.env.databaseURL,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query: ', text);
    return userPool.query(text, params, callback);
  },
};
