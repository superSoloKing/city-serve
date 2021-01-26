var redis = require("redis")
var client = redis.createClient('6379','127.0.0.1')

function setToken(){
  client.set('hello','this is a vale')
  client.get('hello')
  console.log(a)
}

module.exports = {
  setToken
}