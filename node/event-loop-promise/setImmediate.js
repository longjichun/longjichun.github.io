setTimeout(function(){
	console.log("timeout")
})
setImmediate(function(){
	console.log("immediate")
})

// setImmediate 内执行 setImmediate 会将 immediate 函数注册到下一次 event loop 的 【check 阶段】

// https://juejin.im/entry/58332d560ce46300610e4bad