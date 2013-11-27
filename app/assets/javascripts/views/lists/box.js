TodoApp.Views.ShowBox = Backbone.View.extend({
	template: JST["lists/box"],

	render: function() {
		var renderedContent = this.template();

		this.$el.html("Drag and drop here! => <img width='45' height='45' src='http://www.yourdailymac.net/wp-content/uploads/2011/04/512-TrashIcon.png'>")
		this.$el.find("img").droppable({tolerance: "touch"});

		return this;
	}
})