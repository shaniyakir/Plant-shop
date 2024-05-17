export const getAllProducts = async () => {

    const route = 'http://localhost:9000/products/products';
    return fetch(route, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => res.json())
        .then(res => {
            return res
        })
}

export const removeProduct = async (productId) => {

    const route = 'http://localhost:9000/products/product';
    return fetch(route, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            productId: productId
        })
    }).then(res => res.json())
        .then(res => {
            return res
        })
}