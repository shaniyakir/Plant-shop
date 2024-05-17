export const addProductTOCart = async (userName, productName, productPrice, productId) => {
    // console.log(userName)
    // console.log(productName)
    // console.log(productPrice)
    // console.log(productId)
    const route = 'http://localhost:9000/carts/cart';
    return fetch(route, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName,
            productName,
            productPrice,
            productId
        })
    }).then(res => res.json())
        .then(res => {
            return res
        })
}

export const getCart = async (userName) => {
    const route = 'http://localhost:9000/carts/getCart';
    return fetch(route, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName
        })
    }).then(res => res.json())
        .then(res => {
            return res
        })
}

export const deleteCart = async (userName) => {
    const route = 'http://localhost:9000/carts/cart';
    return fetch(route, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName
        })
    }).then(res => res.json())
        .then(res => {
            return res
        })
}

export const removeItemFromCart = async (userName, productName) => {
    const route = 'http://localhost:9000/carts/removeItem';
    return fetch(route, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName,
            productName
        })
    }).then(res => res.json())
        .then(res => {
            return res
        })
}