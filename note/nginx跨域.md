#跨域
* 下边两种跨域情景都需要在 location下配置header
	 		add_header 'Access-Control-Allow-Origin' 'http://localhost:4200';
            add_header 'Access-Control-Allow-Credentials' 'true';
            add_header 'Access-Control-Allow-Headers' 'Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,X-Requested-With';
            add_header 'Access-Control-Allow-Methods' 'GET,POST,OPTIONS';


	## 跨域请求静态服务
		* 总共两个服务		 项目A端口：4200  ; nginx端口： 80
		* 由nginx搭建静态服务器 localhost:80，ng2的启动的服务localhost:4200
		* 由于nginx配置了header，所以A里边请求 http://localhost:80/*  的服务都不受跨域的限制
	
	## 跨域请求其它站点
	   * 总共三个服务        项目A端口：4200  ; nginx端口： 80 ; 远程服务B端口：3000
	   * 要求 A通过nginx访问B的服务 /api/data
	   * A可以访问 'http://localhost:80/proxy/api/data' ; 注：proxy可以是其他名称
	   * nginx server下再配置一个localtion   
	   		localtion ^~/proxy/ {
				rewrite ^/proxy/(.*)$ /$1 break;
            	proxy_pass http://localhost:3000;	   			
	   		}
	   * 通过配置可以劫持带proxy的请求，然后处理，

* nginx 不允许使用post方式访问静态文件