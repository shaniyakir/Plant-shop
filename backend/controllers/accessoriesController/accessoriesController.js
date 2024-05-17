const accessoriesRepository = require('../../repositories/accessoriesRepository/accessoriesRepository')

const addProduct = ({body}, res) => {
    const {productId, productName, productPrice, productAmount} = body
    accessoriesRepository.addProduct(productId,productAmount, productName, productPrice)
    res.status(200).send({success: true})
}

const removeProduct = ({body}, res) => {
    const {productId} = body
    accessoriesRepository.removeProduct(productId)
    res.status(200).send({success: true})
}

const getAllAccessories = ({body}, res) => {
    const ans = accessoriesRepository.getAllAccessories()
    res.status(200).send({accesories: ans})
}

module.exports.addProduct = addProduct;
module.exports.removeProduct = removeProduct;
module.exports.getAllAccessories = getAllAccessories;