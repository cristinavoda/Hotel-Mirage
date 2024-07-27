// Crear un nuevo usuario
exports.createUser = async (userData) => {
  try {
    const { name } = userData;
    const [result] = await pool.query('INSERT INTO users (name) VALUES (?)', [name]);
    return { id: result.insertId, name };
  } catch (error) {
    throw new Error('Error creating user: ' + error.message);
  }
};
