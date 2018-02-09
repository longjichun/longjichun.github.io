var event = require("events")
var myEve = new event()

// 													1
myEve.setMaxListeners(12)
for(var i = 0;i<12;i++) {
	// 可以使用myEve.setMaxListeners(n) 进行设置绑定个数，默认为10个
	myEve.on("eve",function(a){
		console.log(a)
	})
}

// 													6
console.log(myEve.listeners('eve'))


myEve.emit("eve",123)


// 													2
var loopNum = 0;
myEve.on("loop",function(a){
	// 会陷入循环
	console.log(a)
	if(++loopNum<10) {
		myEve.emit('loop',123)
	}
})

myEve.emit("loop",123)


// 3
myEve.on("afterEmitBind",function(){
	console.log("one")
})

myEve.emit("afterEmitBind")

myEve.on("afterEmitBind",function(){
	// 后绑定的不会触发
	console.log("first")
})

// 													4
myEve.on('pre',function(){
	console.log('first bind')
})
// 使用prependListener 可以后绑定先触发
myEve.prependListener('pre',function(){
	console.log("last bind")
})
myEve.emit("pre")


//													5
console.log(myEve.eventNames())

// removeAllListeners removeListener  prependOnceListener once  addListener/on   listenerCount 