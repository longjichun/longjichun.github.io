var child_process = require("child_process")
var p1 = child_process.fork('sources/fork_child1.js',['child1','1111'],{})
var p2 = child_process.fork('sources/fork_child2.js',['child2','2222'],{})
p1.on("message",function(data){
	console.log('【get p1 msg】：',data)
})

p2.on("message",function(data){
	console.log('【get p2 msg】：',data)
})

setTimeout(function(){p1.send("来自parent的问候")},6000)
setTimeout(function(){p2.send("来自parent的问候")},8000)