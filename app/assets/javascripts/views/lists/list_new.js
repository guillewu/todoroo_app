TodoApp.Views.ListNew = Backbone.View.extend({
	template: JST["lists/new"],

	render: function() {
		var renderedContent = this.template();

		this.$el.html(renderedContent);
		return this;
	}
})