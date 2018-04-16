var fork = require("child_process").fork
var c1 =fork('./c.js')
c1.on("message",function(d){
	console.log(d)
	c1.send(4)
})