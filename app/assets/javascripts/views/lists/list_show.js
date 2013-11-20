TodoApp.Views.ListShow = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.model.get("notes"), "add change remove", this.render);
	},

	template: JST["lists/show"],

	events: {
		"click .new-note": "createNewNote",
		"submit form.create-note": "saveNote",
		"dblclick li": "editNote"
	},

	render: function() {
		var renderedContent = this.template({
			list: this.model
		});

		this.$el.html(renderedContent);
		this.$el.find("h4").draggable({ revert: true });
		this.$el.find("li").draggable({ revert: true });
		return this;
	},

	createNewNote: function(event) {

		var newNoteView = new TodoApp.Views.NoteNew({});
		newNoteView.render();
		this.$el.find("ul").append(newNoteView.$el);

	},

	saveNote: function(event){
		var notes = this.model.get("notes");
		event.preventDefault();

		var data = $(event.currentTarget).serializeJSON();
		data.note.list_id = this.model.id;

		notes.create(data, {
			wait: true
		});
	},

	editNote: function(event) {
		console.log("delete");
	}
});

// this.model is a List model
// this.model.get("notes") is the list's notes