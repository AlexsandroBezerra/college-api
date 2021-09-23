const { Router } = require('express')

const { ensureAuthenticated } = require('../middlewares/ensureAuthenticated')

const tasksRouter = Router()

tasksRouter.use(ensureAuthenticated)

tasksRouter.get('/', (request, response) => {
  return response.json({ userId: request.user })
})

module.exports = { tasksRouter }
