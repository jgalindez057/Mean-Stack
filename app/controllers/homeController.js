var Contact = require('../models/contacts');

module.exports = function(server){
	console.log('Home Controller funcionando');

	server.get('/api', function (req, res){
		Contact.find({})
		.exec(function(err, contact){
			if (err) {console.log(err)};
			res.json(contact)
		})
	})

	function values(req){
		return {
			name: req.body.name, 
			email: req.body.email, 
			phone: req.body.phone
		}
	}

	server.get('/api/:id', function (req, res){
		var contact = req.params.id;
		Contact.findOne({ _id : contact})
		.exec(function(err, contact){
			res.json(contact)
		})
	})

	server.post('/api', function (req, res){
		console.log(req.body)
		var newContact = new Contact(req.body);

		newContact.save(function (err, contact){
			if (err) {console.log(err)};
			res.json(contact);
		})
	})

	server.put('/api/:id', function (req, res){
		var contact = req.params.id;
		Contact.update({_id: contact}, {$set: values(req) }, {new: true})
		.exec(function(err, contact){
			res.json(contact)
		})
	})

	server.delete('/api/:id', function (req, res){
		var contact = req.params.id;
		Contact.remove({ _id : contact})
		.exec(function(err, contact){
			res.json(contact)
		})
	})
}