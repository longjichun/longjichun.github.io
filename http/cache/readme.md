## 文档过期判断
* expires
	- 设置一个过期时间
	- 绝对时间
	- 如果为0，资源永久过期

* Cache-control  
	- max-age= 相对时间
	- private表明响应只能被单个用户缓存，不能作为共享缓存（即代理服务器不能缓存它）。
	- no-cache
		+ 客户端使用该请求头会导致不适用新鲜度检测

## 文档在验证
### 优先级 max-age | s-max-age > expires

### post请求不能做缓存