const userRepository = require("../../repositories/userRepository/userRepository")
const uuidv4 = require('uuid').v4;
const cartRepository = require('../../repositories/cartRepository/cartRepository')

const sessions = {};
const HALF_MINUTE_TIMER = 1800 * 1000
const TEN_DAYS_TIMER = 864000 * 1000

const login = ({ body }, res, next) => {
  const { userName, password, rememberMe } = body
  const user = userRepository.getUserByName(userName)
  const isCorrectPassword = user ? user.pass === password : false

  

  if (typeof (user) == undefined || !isCorrectPassword) {
    return res.status(401).send({success: false  ,error: { code: 401, message: 'Incorrect user name or password' }});
  }

  userRepository.addUserLogin(userName)

  const sessionId = uuidv4();
  const cookieSessionTime = rememberMe ? TEN_DAYS_TIMER : HALF_MINUTE_TIMER
  //res.set('Set-Cookie', `session=${sessionId};Max-Age=${cookieSessionTime}`)
  res.cookie('session', {session: sessionId, userName}, {
    httpOnly: false,
    maxAge: cookieSessionTime,
    secure: false,
  });

  sessions[sessionId] = userName;

  // setTimeout(() => {
  //   delete sessions[sessionId];
  // }, cookieSessionTime);

  res.status(200).send({ token: 'not real token', username: userName , success: true})
  res.end();
}

const getAllUsers = (req, res) => {
  const allUsers = userRepository.getAllUsers()
  const allUsersWithCart = allUsers.map((user) => {
    const userCart = cartRepository.findCart(user.user)
    return {...user, userCart: typeof(userCart) !== 'undefined' ? userCart.products.length : 0}})
  res.status(200).send({ users: allUsersWithCart })
}

const registerUser = ({ body }, res) => {
  const { userName, userPassword } = body
  const result = userRepository.registerUser(userName, userPassword)
  console.log(11111)
  console.log(result)
  res.send({ resultStatus: result })
  res.end();
}

module.exports.login = login
module.exports.registerUser = registerUser
module.exports.getAllUsers = getAllUsers