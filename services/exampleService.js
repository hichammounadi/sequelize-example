const Agent = require('../models/exampleModel')
const Sequelize = require('sequelize')



const createAgentService = (data) => {
    const agent = Agent.create(data)
    return agent
}
const getAllAgentService = () => {
    const agents = Agent.findAll()
    return agents
}
const getAgentService = (email) => {
    const agent = Agent.findOne({email})
    return agent
}


module.exports = {createAgentService, getAllAgentService, getAgentService}