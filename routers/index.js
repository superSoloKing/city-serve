var indexRouter = require('../controller/index');
var usersRouter = require('../controller/users');

// 配置路由中间件
module.exports = function setRouter(app){
  app.use('/', indexRouter);
  app.use('/users', usersRouter);
}