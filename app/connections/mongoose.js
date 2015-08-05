var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meanStack');

module.exports = mongoose;