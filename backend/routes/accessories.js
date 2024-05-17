var express = require('express');
var router = express.Router();
const accessoriesController = require("../controllers/accessoriesController/accessoriesController");

router.get('/accesories', accessoriesController.getAllAccessories);
router.post('/accesories', accessoriesController.addProduct);
router.delete('/accesories', accessoriesController.removeProduct);

module.exports = router;

