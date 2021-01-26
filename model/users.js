const { DataTypes } = require('sequelize');

const User = function(){
  return sequelize.define('User', {
    id: { // 用户id
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,// 昵称
    open_id: DataTypes.STRING,// open_id
    phone:DataTypes.STRING,// 手机号
    sex:DataTypes.INTEGER, // 性别  0:未设置，1:男；2:女
    avatar_url:DataTypes.STRING,// 用户头像地址
    city:DataTypes.STRING, // 用户城市
    province:DataTypes.STRING,// 用户所在国家
    language:DataTypes.STRING, // 用户语言
  }, {
    tableName: 'users', // 指定表名
    updatedAt: 'update_date',
    createdAt: 'create_date',
  })
}

module.exports = User