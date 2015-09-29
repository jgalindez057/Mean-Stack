var Contact = require('../models/contact');

module.exports = function (app){
	console.log('Home Controller funcionando')

	app.get('/api', function(req, res){
		Contact.find({})
		.exec(function(err, contact){
			res.json(contact)
		})
	})

	app.get('/api/:id', function(req, res){
		Contact
		.find({_id : req.params.id})
		.exec(function(err, contact){
			res.json(contact);
		})
	})

	app.post('/api', function(req, res){
		var newContact = new Contact(req.body)
		console.log(req.body)
		newContact.save(function(err, contact){
			res.json(contact)
		})
	})

	app.put('/api:id', function(req, res){
		Contact.update({_id: req.params.id}, {$set: values(req) }, {new: true})
		.exec(function(err, contact){
			res.json(contact)
		})
	})

	app.delete('/api/:id', function(req, res){
		Contact
		.remove({_id : req.params.id})
		.exec(function(err, contact){
			res.json(contact);
		})
	})
}	