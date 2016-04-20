var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('myData', ['users']);
var bodyParser = require('body-parser');
var users = require('login-mongo');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/partials/index.html');
});

app.get('/users', function(req, res) {
	db.users.find(function (err,docs) {
		res.json(docs);
	});
});

app.post('/users', function(req, res) {
	users.add(req.body.email, req.body.email, req.body.password, function(err, success) {
		return res.end(JSON.stringify({
			error: err,
			success: success
		}));
	});
});

app.post('/login', function(req, res) {
	users.checkPassword(req.body.email, req.body.password, function(success){
		if(success) {
			req.session.user = req.body.email;
			return res.redirect('/');
		} else {
			req.session.user = void 0;
		}
	});
});

app.listen(3000);