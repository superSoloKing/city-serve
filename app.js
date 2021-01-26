var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 引入自定义中间件
var middleWre = require("./middleware")
// 引入配置路由中间件
var setRouter = require('./routers');
// 引入自定义插件
var plugins = require("./plugins")

// 插入自定义插件
plugins()

var app = express();

// 注册中间件
app.use(logger('dev'));
app.use(express.json()); // 解析application/json,参数
app.use(express.urlencoded({ extended: false })); // 解析www-form-urlencoded,参数
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 插入自定义中间件
middleWre(app)

// 调用配置路由中间件
setRouter(app)






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});


module.exports = app;
