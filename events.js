var Events = function(events, date) {
	this.eventName = [];
	this.eventDate = [];
	//this.newArray = [];
	this.eventsList = [];
	this.events = events;
	this.date = date;

	this.addEvent = function(events) {
		this.eventName.push(events);
		//console.log(events);
	};

	this.addDate = function(date) {
		this.eventDate.push(date);
		//console.log(date);
	};

	// to combine the Name and dates of events
	this.addEventList = function() {
		for (var i = 0; i < this.eventName.length && i < this.eventDate.length; i++) {
			this.eventsList.push([this.eventName[i], this.eventDate[i]]);

		}
		//console.log(this.eventsList);	

	};
	/*store list in object
	this.objectify = function(newArray){
		newArray.forEach(function(element){
			this.EventsList[element[0]] = element[1];
		});
		return this.EventsList;
	}*/

	// Remove Event from Event List(Need to fix not working properly)
	this.removeEvent = function(remove) {
		for (var i = 0; i < this.eventsList.length; i++) {
			for (var j = 0; j < this.eventsList[i].length; j++) {
				if (this.eventsList[i][j] === remove) {
					var removed = this.eventsList.slice(i, 1);
				}
			}
		}
		//console.log(this.eventsList);
	};

	// to accept admin password
	this.authentication = function(password){
		if(password === "accessgranted")


	}
	else{
		//print invalid password
	}
	};
};

//var event1 = new Events();
//event1.addEvent("Home work");
//event1.addDate("10/12/2003");
//event1.addEvent("more events");
//event1.addDate("10/13/2004");
//event1.addEventList();
//event1.removeEvent(" Home work");

module.exports = Events;