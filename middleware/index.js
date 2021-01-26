
/**
 * 自定义中间件 在进入路由中间件之前执行
 * 多个中间件的执行顺序是自上而下
 * 必须调用next，才会执行下一个中间件
 * @param {*} app 
 */
var middleWre = function(app){

  // 小程序不需要解决跨域；若用浏览器访问接口，则需要解决跨域，或者使用nginx来解决跨域,此处采用的是修改响应头的方法
  // app.use("",function(req, res, next) {
  //   //跨域问题
  //   res.header('Access-Control-Allow-Origin', '*');

  //   res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  
  //   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
  //   next();
  // });

  // 拦截无token请求的中间件
  app.use("",function(req, res, next) {
    // 只有白名单和携带token的请求放行，其余直接返回响应未登录
    let token = req.headers.authorization
    if(!token && req.url !== "/users/login"){
      res.status(500).json({message:"没有登录"});
      return 
    }
    next();
  });
  

}

module.exports = middleWre