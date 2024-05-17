const cartRepository = require('../../repositories/cartRepository/cartRepository')

const addItemToCart = ({body}, res) => {
    const {userName, productName, productPrice, productId} = body
    cartRepository.addProductToCart(userName, productName, productPrice, productId)
    res.status(200).send({success:true})
}

const removeProductFromCart = ({body}, res) => {
    const {userName, productName} = body
    console.log(userName)
    console.log(productName)
    cartRepository.removeProductFromCart(userName, productName)
    res.status(200).send({success:true})
}

const removeCart = ({body}, res) => {
    const {userName} = body
    cartRepository.removeCart(userName)
    res.status(200).send({success:true})
}

const getCartByUserName = ({body}, res) => {
    const {userName} = body
    const cart = cartRepository.findCart(userName)
    res.status(200).send({success:cart ? true : false, cart: cart})
}

module.exports.addItemToCart = addItemToCart
module.exports.removeCart = removeCart
module.exports.getCartByUserName = getCartByUserName
module.exports.removeProductFromCart = removeProductFromCart
