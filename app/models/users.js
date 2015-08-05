var mongoose = require('../connections/mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name:{
		type: String
	},
	email:{
		type: String
	},
	phone:{
		type: String
	}
})

var userModel = mongoose.model('users', userSchema);

module.exports = userModel;

