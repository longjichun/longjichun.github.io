var http = require("http")
var EventEmitter = require("events")
class MyEmitter extends EventEmitter {}

const myEmitter = new EventEmitter ();

http.createServer((req,res)=>{
	res.end(xyz)
}).listen(3000)
// process.on('uncaughtException', (err) => {
//   console.error('有错误');
// });
myEmitter.on("error",function(err){
	console.error("error")
})
