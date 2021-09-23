const { Router } = require('express')

const { sessionsRouter } = require('./sessions.routes')
const { tasksRouter } = require('./tasks.routes')

const routes = Router()

routes.use('/sessions', sessionsRouter)
routes.use('/tasks', tasksRouter)

module.exports = { routes }
