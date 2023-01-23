// const sqlite3 = require('sqlite3').verbose();

// let db = new sqlite3.Database('./ux.db', sqlite3.OPEN_READWRITE ,(err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Connected to the ux SQlite database.');
// });

import mysql from 'mysql2';

import config from '../config';

const pool = mysql.createPool({
  connectionLimit: 2,
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
});

export const db = {
  query(query, values) {
    return new Promise((resolve, reject) => {
      pool.query(query, values, (err, results, fields) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({ results, fields });
      });
    });
  },
};