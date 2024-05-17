const DATA_FILE_PATH = 'data/productsDB.json'
const fs = require('fs')

const addProduct = (productId, productAmount, productName, productDesc, productPrice) => {
    try {
        const productsData = fs.readFileSync(DATA_FILE_PATH)
        const productsDataParsed = JSON.parse(productsData).products
        const newProduct = {
            "id": productId,
            "productName": productName,
            "price": productPrice,
            "quantity": productAmount,
            "description": productDesc
        }

        productsDataParsed.push(newProduct)
        
        res = fs.writeFile(DATA_FILE_PATH, JSON.stringify({ products: productsDataParsed }), (err) => {
            if (err)
                console.log(err)
            else {
                console.log('file saved successfully')
            }
        })
    } catch (err) {
        console.log("error reading/writing data from file")
        console.log(err)
    }
}

const removeProduct = (productId) => {
    try {
        const productsData = fs.readFileSync(DATA_FILE_PATH)
        const productsDataParsed = JSON.parse(productsData).products
        const filteredData = productsDataParsed.map((product) => {
            if(product.id === productId) {
                if(product.quantity === 1)
                    return
                const productToChange = product
                productToChange.quantity = productToChange.quantity - 1
                return productToChange 
            }

            return product
        }).filter(pr => pr != null && typeof(pr) != undefined)

        res = fs.writeFile(DATA_FILE_PATH, JSON.stringify({ products: filteredData }), (err) => {
            if (err)
                console.log(err)
            else {
                console.log('file saved successfully')
            }
        })
    } catch (err) {
        console.log("error reading/writing data from file")
        console.log(err)
    }
}

const getAllPlants = () => {
    try {
        const productsData = fs.readFileSync(DATA_FILE_PATH)
        const productsDataParsed = JSON.parse(productsData).products
        return productsDataParsed
    } catch (err) {
        console.log("error reading data from file")
        console.log(err)
    }
}

module.exports.addProduct = addProduct
module.exports.removeProduct = removeProduct
module.exports.getAllPlants = getAllPlants