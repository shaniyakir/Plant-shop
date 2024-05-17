const DATA_FILE_PATH = 'data/cartDB.json'
const fs = require('fs')

const addProductToCart = (userName, productName, productPrice, productId) => {
    try {
        const cartData = fs.readFileSync(DATA_FILE_PATH)
        const cartDataParsed = JSON.parse(cartData).carts
        let userCartExist = false
        const mappedData = cartDataParsed.map((cartData) => {
            if(cartData.userName === userName) {
                const productsInCart = cartData.products
                productsInCart.push({name :productName,  productPrice: productPrice, productId:productId})
                userCartExist = true
                return {userName: userName, products: productsInCart}
            }
            return cartData
        })

        if(!userCartExist) {
            const newProducts = []
            newProducts.push({name:productName, productPrice:productPrice, productId:productId})
            mappedData.push({userName: userName, products: newProducts})
        }

        res = fs.writeFile(DATA_FILE_PATH, JSON.stringify({ carts: mappedData }), (err) => {
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
const removeProductFromCart = (userName, productName) => {
    try {
        const cartData = fs.readFileSync(DATA_FILE_PATH)
        const cartDataParsed = JSON.parse(cartData).carts
        
        let itemRemoved = false
        const mappedData = cartDataParsed.map((cartData) => {
            if(cartData.userName === userName) {
                console.log(cartData)
                return {
                    userName: userName,
                    products: cartData.products.map((product) => {
                         if (product.name === productName && !itemRemoved) {
                            itemRemoved = true
                            return null
                        }else {
                            return product
                        } }).filter(el => el)
                }
            } else {
                return cartData
            }
        })

        res = fs.writeFile(DATA_FILE_PATH, JSON.stringify({ carts: mappedData }), (err) => {
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
const removeCart = (userName) => {
    try {
        const cartData = fs.readFileSync(DATA_FILE_PATH)
        const cartDataParsed = JSON.parse(cartData).carts
        const filteredData = cartDataParsed.map((cart) => {
            if(cart.userName === userName) {
                    return
            }

            return cart
        }).filter(cr => cr != null && typeof(cr) != undefined)

        res = fs.writeFile(DATA_FILE_PATH, JSON.stringify({ carts: filteredData }), (err) => {
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

const findCart = (userName) => {
    try {
        const cartData = fs.readFileSync(DATA_FILE_PATH)
        const cartDataParsed = JSON.parse(cartData).carts
        const userCart = cartDataParsed.find(cart => cart.userName === userName)
        console.log(userName)
        console.log(userCart)
        return userCart
    } catch (err) {
        console.log("error reading/writing data from file")
        console.log(err)
    }
}

module.exports.addProductToCart = addProductToCart
module.exports.removeCart = removeCart
module.exports.findCart = findCart
module.exports.removeProductFromCart = removeProductFromCart

