// user模型
var { User } = require('../model')
var axios = require('axios')
// 微信配置项
var configs = require('../config/wxConfig');


// 查询所有的用户信息
function selectUserAll(){
  return User().findAll()
}
// 根据id获取用户信息
function selectUserById(openid){
  return User().findAll({
    where:{
      open_id:openid
    }
  })
}
 // 根据微信的code查询微信用户的open_id
function WXSelectInfo(wxCode){
   return axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${configs.APPID}&secret=${configs.SECRET}&js_code=${wxCode}&grant_type=authorization_code`).then(axRes=>{
    return Promise.resolve(axRes.data)
  }).catch(err=>{
    console.log('error:',err)
    return Promise.reject(null)
  })
}
// 将用户保存进数据库
function userInsert(user){
  return User().create(user)
} 





module.exports = {
  
  // 查询所有的用户信息
  selectUserAll,
  // 根据微信的code查询微信用户的open_id
  WXSelectInfo,
  // 根据id获取用户信息
  selectUserById,
  // 保存用户
  userInsert
}