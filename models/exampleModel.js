const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');
const sequelize = require('../db/db');

const Agent = sequelize.define('agent', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});

Agent.prototype.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};
Agent.prototype.createJWT = function () {
          return jwt.sign({
              agentId: this.id,
            name: this.name,
            
          },process.env.SECRET_KEY,{
            expiresIn: process.env.JWT_LIFETIME,
          });
};

Agent.beforeCreate(async (agent, options) => {
  const salt = await bcrypt.genSalt(10);
  agent.password = await bcrypt.hash(agent.password, salt);
});


module.exports = Agent;
