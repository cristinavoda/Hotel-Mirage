const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'mirage_hotel'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Database connected!');
});

module.exports = connection;
