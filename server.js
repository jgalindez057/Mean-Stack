var express = require('express');
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	cors = require('cors'),
	server = express();
	
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());
server.use(cookieParser());
server.use(cors())

require('./app/controllers/homeController')(server);
server.listen(3000);