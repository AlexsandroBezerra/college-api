const { Router } = require('express')

const { dbConnection } = require('../database')
const { generateToken } = require('../utils/generateToken')

const sessionsRouter = Router()

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body

  const [user] = await dbConnection('users').select().where({ email })

  if (!user)
    return response.status(400).json({ message: 'Invalid email/password combination' })

  if (user.password !== password)
    return response.status(400).json({ message: 'Invalid email/password combination' })

  const token = generateToken(user)

  return response.json({ ...user, token, password: undefined })
})

module.exports = { sessionsRouter }
