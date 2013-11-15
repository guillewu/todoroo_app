TodoApp.Models.List = Backbone.Model.extend({
	urlRoot: "/lists",

	parse: function(response) {
		response["notes"] = new TodoApp.Collections.ListNotes(response["notes"], {
			url: "/lists/" + response["id"] + "/notes"
		});

		return response;
	}
});