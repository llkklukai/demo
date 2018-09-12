/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 * 
 */


let baseUrl = ''; 
let routerMode = 'hash';
let baseImgPath;

if (process.env.NODE_ENV == 'development') {
	  baseUrl = 'http://localhost:8000/demo/';
    baseImgPath = 'http://47.104.233.215:80/img/';
}else{
  baseUrl = 'http://47.104.233.215:80/ajeasy';
    baseImgPath = 'http://47.104.233.215:80/img/';
}
export {
	baseUrl,
	routerMode,
	baseImgPath
}
