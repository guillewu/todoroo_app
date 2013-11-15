TodoApp.Views.NoteNew = Backbone.View.extend({
	template: JST["lists/new_note"],

	tagName: "li",
	
	events: {
		"submit form": "createNote"
	},

	render: function() {
		var renderedContent = this.template();

		this.$el.html(renderedContent);
		return this;
	},

	createNote: function(event) {
		event.preventDefault();

		var data = $(event.currentTarget).serializeJSON();

		var list = new TodoApp.Models.Note(data);
	}
})