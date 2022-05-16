const agentRouters = require('express').Router()
const {createAgentController, getAllAgentController, login} = require('../controllers/exampleController')



agentRouters.route('/').post(createAgentController).get(getAllAgentController)
agentRouters.route('/login').post(login)

module.exports = agentRouters