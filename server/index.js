const express = require('express');
const app = express();
const reservationRoutes = require('./routes/reservationRoutes');

app.use(express.json());
app.use('/api/reservations', reservationRoutes);
app.use('/api',userRoutes);
const PORT = process.env.PORT || 5174;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
