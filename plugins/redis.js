// 引入redis
var redis = require("redis")



module.exports = function(){
  var client = redis.createClient('6379','127.0.0.1')
  global.redisClient = client
  console.log("redis插件")
}