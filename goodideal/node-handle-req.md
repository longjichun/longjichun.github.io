# 处理高并发
## 问题描述： 当web服务刚好启动，一条sql查询，尚未有缓存，同时n个访问来临，需要请求该sql数据，那么，在 第一个sql请求结束之前，则会发生n个sql请求

var results
var select = function (callback) {
	if(result) {
		callback(results)
		return;
	}
 	db.select("SQL", function (res) {
		results = res
 		callback(res);
 	});
}; 