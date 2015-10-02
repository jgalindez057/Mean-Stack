
'use strict';

var express = require('express');

var app = express();
require('./config/express')(app);

app.listen(9000, function() {
    console.log('Express server listening on %d', 9000);
  });

require('../server/controllers/homeController.js')(app);
exports = module.exports = app;
