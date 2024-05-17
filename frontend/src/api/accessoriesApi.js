export const getAllAccessories = async () => {

    const route = 'http://localhost:9000/accessories/accesories';
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