console.log("succ")
process.send(3)
process.on("message",function(d){
	console.log(d)
	//process.send(3)
})