const fs = require('fs')
const { use } = require('../../routes/products')
const DATA_FILE_PATH = 'data/usersDB.json'

const getUserByName = (userName) => {
    const usersData = fs.readFileSync(DATA_FILE_PATH)
    const userDataParsed = JSON.parse(usersData).users
    return userDataParsed.find(item => item.user === userName)
}

const addUserLogin = (userName) => {
    try {
        const userData = fs.readFileSync(DATA_FILE_PATH)
        const userDataParsed = JSON.parse(userData).users
        const filteredData = userDataParsed.map((user) => {
            if(user.user === userName) {
                
                const userToChange = user
                userToChange.loginAmount = user.loginAmount ? user.loginAmount + 1 : 1
                return userToChange 
            }

            return user
        }).filter(pr => pr != null && typeof(pr) != undefined)

        res = fs.writeFile(DATA_FILE_PATH, JSON.stringify({ users: filteredData }), (err) => {
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

const registerUser = (userName, userPassword) => {
    try {
        const userData = fs.readFileSync(DATA_FILE_PATH)
        const usersDataParsed = JSON.parse(userData).users
        usersDataParsed.push({ "user": userName, "pass": userPassword, "loginAmount": 1 })
        res = fs.writeFile(DATA_FILE_PATH, JSON.stringify({users : usersDataParsed}), (err) => { 
            if(err) {
                console.log(err)
            } else {
                console.log('file saved successfully')
            }
        })
    } catch (err) {
        console.log("error reading/writing data from file")
        console.log(err)
    }
}

const getAllUsers = () => {
    const usersData = fs.readFileSync(DATA_FILE_PATH, 'utf-8')
    const usersDataObject = JSON.parse(usersData)
    return usersDataObject.users
}

module.exports.getUserByName = getUserByName
module.exports.registerUser = registerUser
module.exports.getAllUsers = getAllUsers
module.exports.addUserLogin = addUserLogin