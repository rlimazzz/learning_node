const sequelize = require('sequelize');

//Database connection
const sequelizeS = new sequelize('avaliacao', 'root', '12345', {
    host:'localhost',
    dialect:'mysql'
});

module.exports = {
    Sequelize : sequelize,
    sequelize : sequelizeS
}