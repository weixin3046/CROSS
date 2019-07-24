let express = require('express');
let app = express();
let whitList = ['http://localhost:3000']
app.use(function(req, res, next) {
	let origin = req.headers.origin;
	if(whitList.includes(origin)){
		res.setHeader('Access-Control-Allow-Origin', origin);//允许跨域
		res.setHeader('Access-Control-Allow-Headers', 'name');//允许设置请求头
		res.setHeader('Access-Control-Allow-Methods', 'PUT');//允许使用put请求
		res.setHeader('Access-Control-Allow-Credentials', true);//允许发送cookie
		res.setHeader('Access-Control-Max-Age', '6');//预检请求的有效期，单位为秒
		res.setHeader('Access-Control-Expose-Headers', 'name');//允许获取请求头
		if(req.method === 'OPTIONS') {
			res.end();
		}
	}
	next();
})
app.put('/getData', function (req, res) {
	res.setHeader('name','xiaomi');
	res.end('我不爱你');
})

app.get('/getData', function (req, res) {
	res.end('我爱你');
})
app.use(express.static(__dirname));
app.listen(4000)