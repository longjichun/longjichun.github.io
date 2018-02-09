var EventEmitter = require("events")
function Fn() {
	EventEmitter.call(this)
}
var fn = new Fn()
console.log(fn)
/*fn.on("abc",function(){
	console.log("cc")
})
fn.emit("abc")*/
