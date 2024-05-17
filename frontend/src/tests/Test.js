import lodash from 'lodash'

const fetchUrl = ({ url, method, body, expectedRes }) => {
    const defaultReq = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        fetch(url, method === 'GET' ? defaultReq : { ...defaultReq, body: JSON.stringify(body) })
            .then(res => res.json())
            .then(res => {
                console.log(`%c --------------------------\n${url}\n TEST ${lodash.isMatch(res, expectedRes) ? "PASSED" : "FAILED"} \nexpected: ${JSON.stringify(expectedRes)} \ngot: ${JSON.stringify(res).substring(0, 32) + '...'} \n-------------------------- \n`,
                    `color:${lodash.isMatch(res, expectedRes) ? 'green' : 'red'}`)
            })
    }
    catch (err) {

    }
}
const tests = [
    {
        url: "http://localhost:9000/products/products",
        method: "GET",
        body: {},
        expectedRes: { plants: [] }
    },
    {
        url: "http://localhost:9000/users/login",
        method: "POST",
        body: { userName: "admin", password: "admin", rememberMe: false },
        expectedRes: { success: true }
    },
    {
        url: "http://localhost:9000/users/registerUser",
        method: "POST",
        body: { userName: "test", userPassword: "" },
        expectedRes: {}
    },
    {
        url: "http://localhost:9000/users",
        method: "GET",
        body: {},
        expectedRes: { users: [] }
    },
    // {
    //     url: "http://localhost:9000/products/product",
    //     method: "POST",
    //     body: { productId: -1, productName: "test", productPrice: 1, productAmount: 1, prodcutDescription: 1 },
    //     expectedRes: { success: true }
    // },
    {
        url: "http://localhost:9000/products/product",
        method: "DELETE",
        body: { productId: -1 },
        expectedRes: { success: true }
    },
    {
        url: "http://localhost:9000/carts/cart",
        method: "POST",
        body: { userName: "test", productName:"test" },
        expectedRes: { success: true }
    },
    {
        url: "http://localhost:9000/carts/getCart",
        method: "post",
        body: { },
        expectedRes: { success: true , cart: {}}
    },
    {
        url: "http://localhost:9000/carts/cart",
        method: "DELETE",
        body: { userName: "test" },
        expectedRes: { success: true }
    },
    {
        url: "http://localhost:9000/products/product",
        method: "DELETE",
        body: { productId: -1 },
        expectedRes: { success: true }
    },

]

export const runTest = () => {
    tests.forEach(test => fetchUrl(test))
}

const Tests = () => {
    runTest()
}
