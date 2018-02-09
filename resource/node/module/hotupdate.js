function cleanCache(module) {
	var path = require.resolve(module);
	console.log(path)
	require.cache[path] = null;
}

// 当require一个模块的时候，不仅会将该模块存入cache，并且该模块的parent属性，的children 会将引入该模块
console.log(module == require.main) // 用于判断 当前文件是运行的主文件，还是require的
setInterval(()=>{
	cleanCache('./code.js');
	var code = require("./code.js")  // 需要重新require
	console.log(code)
},2000)

