var AppActions = require('../actions/AppActions');

module.exports = {
	addNote: function(note){
		$.ajax({
			url: "https://api.mongolab.com/api/1/databases/mystickypad/collections/notes?apikey={{THIS IS MY API KEY}}",
			data: JSON.stringify(note),
			type: "POST",
			contentType: "application/json"
		});
	},
	getNotes: function(){
		$.ajax({
			url: "https://api.mongolab.com/api/1/databases/mystickypad/collections/notes?apikey={{THIS IS MY API KEY}}",
			dataType: "json",
			cache: false,
			success: function(data){
				AppActions.receiveNotes(data);
			}.bind(this),
			error: function(xhr, status, err){
				console.log(err);
			}.bind(this)
		});
	}
}