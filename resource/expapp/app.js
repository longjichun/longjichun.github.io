var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
// app.use(bodyParser.json());
app.use(function(req,res,next){
	// 实现一个中间件
	var postData = ''
	req.on("data",function(res){
		postData = postData + res;
	})
	req.on("end", function(){
		var _json = postData.toString() || "{}"
		req.body = JSON.parse(_json)
		next()
	})
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.post("/post_body",function(req,res){
	res.end("post_body succ")
})

app.param('id',function(req,res,next,param_name){
	console.log('get single params id: ',param_name)
	next()
})
app.get('/path/:id',function(req, res){
	var id = req.params.id;
	console.log(id)
	res.end(`获取到的id为${id}`)
})

app.param(['id','name'], (req,res,next,param_val, param_name)=>{
	// param_val 为参数名，也即是 id或者name， param_val为传递的值
	// 如果一个请求中既包含了id参数，也包含了name参数【/many_param/123/long】,则此函数触发两次
	console.log(`[] get many params ${param_name} is: `,param_val)
	next()
})

app.get("/many_param/:id/:name",(req,res) =>{
	// 一个参数也不能少，否则404
	var {id,name} = req.params
	res.end(`get many param:${id}, ${name}`)
})


var blog = express()
// 请求 以blog开头的路径，都会走blog应用，blog.path = 'blog '
app.use('/blog',blog)
blog.get("/",(req,res)=>{
	res.end("blog info")
})

var route1 = require("./routes/route1")
var route2 = require("./routes/route2")
app.use('/phone/cls', route1)
app.use('/watch/cls', route2)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3456)
module.exports = app;
