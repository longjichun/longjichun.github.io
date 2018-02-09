var child_process = require("child_process")
child_process.exec("node sources/test.js a b",{},function(){
	console.log("exec succ")
})