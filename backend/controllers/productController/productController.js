const productRepository = require('../../repositories/productRepository/productRepository')

const addProduct = ({body}, res) => {
    const {productId, productName, productPrice, productAmount, productDescription} = body
    productRepository.addProduct(productId,productAmount, productName,productDescription, productPrice)
     res.status(200).send({success: true})
}

const removeProduct = ({body}, res) => {
    const {productId} = body
    productRepository.removeProduct(productId)
    res.status(200).send({success: true})
}

const getAllPlants = ({body}, res) => {
    const ans = productRepository.getAllPlants()
    res.status(200).send({plants: ans})
}

module.exports.addProduct = addProduct;
module.exports.removeProduct = removeProduct;
module.exports.getAllPlants = getAllPlants;