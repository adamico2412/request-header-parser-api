var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.json(parseHeader(req.headers));
}).listen(process.env.PORT || 8080);

function parseHeader(header) {
	return {
		ipaddress: header["x-forwarded-for"],
		language: header["accept-language"],
		software: header["user-agent"]
	};
}