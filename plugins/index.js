var redis = require("./redis")
var sequelize = require("./sequelize")

module.exports = function(){
  redis()
  sequelize()
  console.log("redis插件外")
}