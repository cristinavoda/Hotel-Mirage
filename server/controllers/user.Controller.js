const pool = require('../models/userModel');

exports.getUser = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).send('User not found');
    res.json(rows[0]);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name } = req.body;
    const [result] = await pool.query('UPDATE users SET name = ? WHERE id = ?', [name, req.params.id]);
    if (result.affectedRows === 0) return res.status(404).send('User not found');
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [req.params.id]);
    res.json(rows[0]);
  } catch (error) {
    res.status(500).send('Server error');
  }
};
