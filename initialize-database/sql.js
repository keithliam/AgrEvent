var mysql = require('mysql');
var readline = require('readline');

var connection = mysql.createConnection({
	user: 'root',			// change
	password: 'Amazing!',	// change
	multipleStatements: true
});

connection.connect();

var read = readline.createInterface(process.stdin, process.stdout);
var sql = "drop database if exists AgrEvent;"
		+ "create database AgrEvent;"
		+ "use AgrEvent;"
		+ "create table events (id int, name text, description text, location text, date_start text, date_end text, time_start text, time_end text, contact_number text, link text, tags text)";

read.question('Enter the no. of events to insert to database: ', (answer) => {

	if(answer >= 1) sql = sql + ";insert into events values (1, 'Palarong UPLB', 'This is a university-wide event held to promote sportsmanship and stuff.', 'University of the Philippines, Los Baños, Laguna', 'April 4, 2017', 'April 7, 2017', '8:00 AM', '9:00 PM', '09176227058', 'uplb.edu.ph', 'sports, campus-wide, uplb, los baños, laguna, palaro')";
	if(answer > 1){
		var i;
		for(i = 1; i < answer; i++) sql = sql + ";insert into events values (" + (i + 1) + ", 'Event Name', 'Event Description', 'Event Location', 'Start Date', 'End Date', 'Start Time', 'End Time', 'Contact Information', 'Event Website', 'Event Tags')";
	}

	connection.query(sql, (err, rows, fields) => {
		if(err) console.log(err);
		console.log('Done.');
	});

	connection.end();
	read.close();
});