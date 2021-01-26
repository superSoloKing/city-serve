const { Sequelize } = require('sequelize');
// 创建sequelize实例
module.exports = function(){
  const sequelize = new Sequelize('city','root','root',{
    host:'localhost',
    dialect:'mysql'
  })
  global.sequelize = sequelize
}