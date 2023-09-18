// require('dotenv').config();
import pkg from 'pg';
const {Pool} = pkg;

let userPool = new Pool({
  connectionString:  'postgres://xstskucd:HUMKg1LzALryqlQM26N5uKLWF5ol1fbT@peanut.db.elephantsql.com/xstskucd',
});

export const dbModelName = {
  query: (text, params, callback) => {
    console.log('executed query: ', text);
    return userPool.query(text, params, callback);
  },
};
