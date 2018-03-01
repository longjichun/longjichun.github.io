// 封装中间件

var http = require("http")
var app = http.createServer(function(req,res) {
	let path = req.url.split("?").shift()
	let currentRunFns = []
	
	for(let item of app.stack) {
		let reg = new RegExp(item.url),
			fn = item.fn;
		if(path.match(reg)) {
			currentRunFns.push( fn)
		}
	}
	var fnInd = 0;
	var next = function() {
		// 关键一步
		fnInd++;
		currentRunFns[fnInd](req,res,next)
	}
	currentRunFns[0].call(app,req,res,next)

})
app.stack = []
app.use = function(url,fn) {
	if(fn == undefined) {
		fn = url
		url = '/'
	}
	if(typeof fn !== 'function') {
		throw 'need a function'
		return
	}
	if(typeof url !== 'string') {
		throw 'url must be a string'
		return
	}
	app.stack.push({url,fn})
}


app.use(function(req,res,next){
	console.log('1')
	next()
})
app.use(function(req,res,next){
	console.log('2')
	res.end('3000')
})

app.listen(3300)