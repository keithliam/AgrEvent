var express = require('express');
var mysql = require('mysql');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Amazing!',
	database: 'AgrEvent'
});
connection.connect();

// serves all static files in folder 'public' to client
app.use(express.static('public'));

const sql = "select * from events";
connection.query(sql, (error, rows, fields) => {
	io.on('connection', function(socket){
		// passes the JSON containing data to main.js for display using jQuery
		socket.emit('event', {events: rows});
	});
});

app.get('/', function(req, res){
	// renders html file on browser
	res.sendFile('/views/index.html', {"root": __dirname});
});

app.get('/profile.html', function(req, res){
	res.sendFile('/views/profile.html', {"root": __dirname});
});

server.listen(3000);
console.log('Server is running at port 3000.');
