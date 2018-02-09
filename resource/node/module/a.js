var b = require("./b")
console.log('a inner`b is:',b)
module.exports = 'my filename is a'

// 主动的一方 
// 当引用一个文件时，发现自己正被该文件引用，则引用的该文件暂时返回 空对象{}