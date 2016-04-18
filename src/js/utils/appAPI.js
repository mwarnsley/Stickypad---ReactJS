var AppActions = require('../actions/AppActions');

module.exports = {
	addNote: function(note){
		$.ajax({
			url: "https://api.mongolab.com/api/1/databases/mystickypad/collections/notes?apikey={{THIS IS MY API KEY}}",
			data: JSON.stringify(note),
			type: "POST",
			contentType: "application/json"
		});
	}
}