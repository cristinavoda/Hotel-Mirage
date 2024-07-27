const express = require('express');
const { check, validationResult } = require('express-validator');
const { getUser, updateUser } = require('../controllers/userController');
const router = express.Router();

router.get('/users/:id', getUser);

router.put('/users/:id',
  [
    check('name').notEmpty().withMessage('Name is required'),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  updateUser
);

module.exports = router;
