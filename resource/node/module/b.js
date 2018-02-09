var a = require("./a")
console.log('b inner`a is:',a)
process.nextTick(function(){
	console.log('nexttick',a)
})
setTimeout(()=>{
	console.log(a)
},1000)
module.exports = 'my filename is b'