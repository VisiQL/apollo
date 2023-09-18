// require('dotenv').config();
import { Pool } from 'pg';

let userPool = new Pool({
  connectionString:  'postgres://xstskucd:HUMKg1LzALryqlQM26N5uKLWF5ol1fbT@peanut.db.elephantsql.com/xstskucd',
});

export default {
  query: (text, params, callback) => {
    console.log('executed query: ', text);
    return userPool.query(text, params, callback);
  },
};
