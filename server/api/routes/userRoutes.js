const express = require('express');
const usersController = require('../controllers/userController');

const router = express.Router();

router.post('/check-username-availability', (req, res, next) =>
  next(usersController.checkUsernameAvailability(req))
);

router.post('/register', (req, res, next) =>
  next(usersController.register(req))
);

module.exports = router;
