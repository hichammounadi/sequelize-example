const {createAgentService, getAllAgentService, getAgentService} = require('../services/exampleService')




const createAgentController = async(req, res) => {
    const agent = await createAgentService({...req.body})
    res.status(201).send({
        msg: `Agent with NAME: '${agent.name}' and ID: ${agent.id} is created successfully` 
    })
}
const getAllAgentController = async(req, res) => {
    const agents = await getAllAgentService();
    res.status(200).send({
        agents: agents,
        count: agents.length
    })
}
const login = async (req, res)=> {
    const {email, password} = req.body
    try {
        const agent = await getAgentService(email)
        const isMatch = await agent.comparePassword(password)
        if(!isMatch){
            return res.send({msg: `password doesn't match`}) 
        }
        const token =  agent.createJWT();
        res.send({ my_token: token})
    } catch (error) {
        res.send(`there is an error : ${error}`)
    }
}



module.exports = {createAgentController, getAllAgentController, login}