const db = require('./db');

const Reservation = {
  create: (data, callback) => {
    const query = `INSERT INTO reservations (arrivalDate, departureDate, roomType, customerName, customerEmail, customerPhone) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(query, [data.arrivalDate, data.departureDate, data.roomType, data.customerName, data.customerEmail, data.customerPhone], callback);
  }
};

module.exports = Reservation;
