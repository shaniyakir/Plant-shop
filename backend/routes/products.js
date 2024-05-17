var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController/productController");

router.get('/products', productController.getAllPlants);
router.post('/product', productController.addProduct);
router.delete('/product', productController.removeProduct);

module.exports = router;
