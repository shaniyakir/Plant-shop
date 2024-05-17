// module.exports = router;
var express = require('express');
const { login, registerUser, getAllUsers } = require('../controllers/userController/userController');
const { getUserByName } = require('../repositories/userRepository/userRepository');

var router = express.Router('/users');

router.post('/login', login);

router.post('/registerUser', registerUser);

router.get('/getUserByName', getUserByName)

router.get('', getAllUsers);

module.exports = router;
