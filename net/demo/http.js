var  http = require("http")
var fn = function(req,res){
	res.end('300')
};
http.createServer(fn).listen(4000)
console.log(333)
process.stdin.on('data',function(d){
	console.log("stdin")
})
/*process.stdout.on("data",function(d){
	console.log(d)
})*/