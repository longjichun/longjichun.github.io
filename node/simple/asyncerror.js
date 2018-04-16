var errFn = function() {
	console.log("errFn running")
	console.log(nothing.value)
}
try {
	process.nextTick(errFn)
} catch(error) {
	// 异步时 catch是不能捕获到错误的
	console.log('some error info: \n',error)
}