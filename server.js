// Load the TCp Library
var net = require("net");

// Load file system library
var fs = require("fs");

// Port listening on
var port = 3000;



// developers using app
var users = [];

var hipsterServer = net.createServer(function(socket) {
	console.log("User Connected");

	users.push(socket);



	//give user a choice to login as admin or user
	socket.write("Enter /admin --> admin login, Enter --> /guest --> for user login.");


	socket.on("data", function(data) {
		// allow only admin can add events
		if("data" === "/admin"){
			// authenticate
			socket.write("Enter admin password: ");
		}

		// Allow developers to register for events and keep 
		// a count of the number of developers registered to a particular event

		// remove events
	});
	socket.on('end', function() {
		for (var i = 0; i < clients.length; i++) {
			if (clients[i] === socket) {
				clients.splice(i, 1);
			}
		}
		console.log('Client disconnected');
	});
});
hipsterServer.listen(port, function() {
	console.log('listening on port ' + port);
});



/*// Load the TCP library
var net = require("net");

var Events = require("./events.js");

// port server will be listing
var port = 3000; 

var developerList = [];

// create server 
var hipsterServer = net.createServer(function(socket){
	socket.name = socket.remoteAddress + ":" + socket.remotePort;
	console.log("client connected");

	developerList.push(socket);


	// Help Menu
	socket.write("/addEvent --> To add Event, /addDate --> To add Date\n");

	// add Event
	socket.on()

	


});





hipsterServer.listen(port, function(){
	console.log("listening on port" + port);
});

// 1) Create Help menu so that user can interact with app from the console
// 2) Create module to store event name and date.
// 3)Developers must be able to see the dates and topics for up coming events 
*/