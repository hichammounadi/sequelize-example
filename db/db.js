const Sequelize = require('sequelize')


const sequelize = new Sequelize(
    'example',
    'root',
    'Testing321#',
    {
        dialect: 'mysql',
        host: 'localhost',
        port: 3306
    }
    // process.env.DATABASE, 
    // process.env.USER,
    // process.env.PASSWORD,
    // {
    //     dialect: 'mysql',
    //     host: process.env.HOST
    // }
    )

module.exports = sequelize