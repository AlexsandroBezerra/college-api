const jwt = require('jsonwebtoken')

const authConfig = require('../configs/auth')

const generateToken = (user) => {
  const token = jwt.sign({}, authConfig.jwt.secret, {
    expiresIn: authConfig.jwt.expiresIn,
    subject: String(user.id),
  })

  return token
}

module.exports = { generateToken }
