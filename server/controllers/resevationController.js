const Reservation = require('../models/reservationModel');

const createReservation = (req, res) => {
  const data = req.body;
  Reservation.create(data, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send({ id: result.insertId });
  });
};

module.exports = {
  createReservation
};
