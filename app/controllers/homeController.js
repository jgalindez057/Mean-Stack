var User = require('../models/users');

module.exports = function(server){
	console.log('Home Controller funcionando');

	server.get('/api', function (req, res){
		User.find({})
		.exec(function(err, user){
			if (err) {console.log(err)};
			res.json(user)
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
		var user = req.params.id;
		User.findOne({ _id : user})
		.exec(function(err, user){
			res.json(user)
		})
	})

	server.post('/api', function (req, res){
		console.log(req.body)
		var newUser = new User(req.body);

		newUser.save(function (err, user){
			if (err) {console.log(err)};
			res.json(user);
		})
	})

	server.put('/api/:id', function (req, res){
		var user = req.params.id;
		User.update({_id: user}, {$set: values(req) }, {new: true})
		.exec(function(err, user){
			res.json(user)
		})
	})

	server.delete('/api/:id', function (req, res){
		var user = req.params.id;
		User.remove({ _id : user})
		.exec(function(err, user){
			res.json(user)
		})
	})
}