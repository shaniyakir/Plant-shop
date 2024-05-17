var express = require('express');
var router = express.Router();
const cartController = require('../controllers/cartController/cartController');

router.post('/getCart', cartController.getCartByUserName);
router.post('/cart', cartController.addItemToCart);
router.delete('/cart',cartController.removeCart);
router.delete('/removeItem',cartController.removeProductFromCart);

module.exports = router;
