var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fullstack');
module.exports = mongoose;