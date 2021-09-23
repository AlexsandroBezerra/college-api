module.exports = {
  jwt: {
    expiresIn: '15m',
    secret: process.env.JWT_SECRET || 'secret-jwt-key'
  }
}
