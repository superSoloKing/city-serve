var express = require('express');
var router = express.Router();
var UUID = require('uuid')

// user模型
var { userService } = require('../services')

/**
 * 用户登录接口
 */
router.post('/login', async function (req, res, next) {
  try {
    let wxCode = req.body.wxCode
    let WXinfo = await userService.WXSelectInfo(wxCode)
    
    let userRes = await userService.selectUserById(WXinfo.openid)
    // 判断数据库是否已存在该用户
    if(userRes.length){
      // 存在则直接返回用户信息
      res.json({userInfo:userRes[0]})
    }else{
      // 不存在则注册进数据库并返回
      let uuid = UUID.v1() // uuid作为用户唯一标识符
      let data = req.body
      let {nickName:name,gender:sex,avatarUrl:avatar_url} = req.body.userInfo
      let user = {
        ...data.userInfo,
        open_id:WXinfo.openid, 
        name,
        sex,
        avatar_url
      }
      let insUser = await userService.userInsert(user)
      // token : openid 存入redis，后面由接口中的token取redis对应的openid，再去操作数据库中对应的用户数据
      redisClient.set(uuid,WXinfo.openid)
      res.json({userInfo:insUser,token:uuid})
    }
  } catch (err) {
    res.json({message:err})
  }

});


module.exports = router;
