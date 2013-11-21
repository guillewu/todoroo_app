TodoApp.Views.ShowBox = Backbone.View.extend({
	template: JST["lists/box"],

	events: {
		// "drop h2": "removeListOrNote"
	},

	render: function() {
		var renderedContent = this.template();

		this.$el.html("<h2>Drop lists/notes here</h2>");
		this.$el.append("<img src='../../../images/rails.png'>")
		this.$el.find("h2").droppable();

		return this;
	},

	removeListOrNote: function(event, ui) {
		console.log(event.toElement)
		alert("works");
	}
})