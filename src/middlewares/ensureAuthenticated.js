const jwt = require('jsonwebtoken')

const authConfig = require('../configs/auth')

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return response.status(401).json({ message: 'JWT is missing' })
  }

  const [scheme, token] = authHeader.split(' ')

  if (!/Bearer$/i.test(scheme)) {
    return response.status(401).json({ message: 'Mal-formatted token' })
  }

  try {
    const decoded = jwt.verify(token, authConfig.jwt.secret)

    const { sub } = decoded

    request.user = { id: Number(sub) }

    return next()
  } catch {
    return response.status(401).json({ message: 'Invalid JWT' })
  }
}

module.exports = { ensureAuthenticated }
