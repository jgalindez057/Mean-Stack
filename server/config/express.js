
'use strict';

var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var path = require('path');

module.exports = function(app) {

  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());

  app.set('appPath', path.join(path.normalize(__dirname + '/../../'), 'client'));
  app.use(express.static(path.join(path.normalize(__dirname + '/../../'), '.tmp')));
  app.use(express.static(app.get('appPath')));

};
