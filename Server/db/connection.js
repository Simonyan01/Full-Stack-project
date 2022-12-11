const {Sequelize} = require('sequelize');
const configs = require('../config/configs');

const sequelize = new Sequelize(configs.DB_NAME, configs.DB_USERNAME, configs.DB_PASSWORD, {
    host: configs.DB_HOSTNAME,
    port: configs.DB_PORT,
    dialect: 'mysql'
});

module.exports = sequelize;