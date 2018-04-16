var redis = require("redis");
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
client.publish("taijian",'oh oh oh !!!',function(){
	console.log("成功发布消息")
})