// config/express.js
var load = require('express-load');
var express = require('express');
var bodyParser = require('body-parser');
var url=require('url');

module.exports = function() {
	var app = express();
	// variável de ambiente
	app.set('port', 3000);	
	// middleware
	app.set('view engine', 'ejs');
	app.set('views','./app/views');	
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')())
	app.use('/', function (req,res,next){
		url.parse(req.url,true).query;
		next();
	});
	load('models', {cwd: 'app'})
	.then('controllers')
	.then('routes')
	.into(app);
	
	app.use(express.static('./public'));
	
	return app;
};