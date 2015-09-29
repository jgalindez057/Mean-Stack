var mongoose = require('../connections/mongoose')
var Schema = mongoose.Schema;

var contactSchema = new Schema({
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

var contactModel = mongoose.model('contact', contactSchema);

module.exports = contactModel