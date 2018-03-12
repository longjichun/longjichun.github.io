var request = require("request")

var n = 0;
console.log(new Date())
var m = 0
var timer = setInterval(function(){
	if(++n<1000) {
		request('http://localhost:3000',function(){
			if(++m>998) {
				console.log(new Date())
			}
		})	
	} else {
		clearInterval(timer)
		timer = null;
	}
},10)
process.on("beforeExit",function(){
	console.log('exit',new Date())
})