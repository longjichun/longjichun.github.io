var redis = require("redis");
var fs = require("fs")
var client = redis.createClient(
	RDS_PORT = 6379,
	RDS_HOST = '127.0.0.1',
	RDS_PWD = '',
	RDS_OPTS = {}
);
client.on("ready",function(err){
	console.log("ready")
})
// 支持同步
client.subscribe("taijian")
client.on("subscribe",function(channel,count){

	console.log('成功订阅频道：',channel)
})
client.on("message", function(channel,msg) {
	var str = Math.random();
	var fs = require("fs")
	var readStream = fs.createReadStream('text.txt')
	var writeStream = fs.createWriteStream(str+'in.txt')
	readStream.pipe(writeStream)
	writeStream.write('feifei')
	console.log("got msg: '",msg,"' from ", channel)
})