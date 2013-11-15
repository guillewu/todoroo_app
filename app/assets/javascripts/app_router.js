TodoApp.AppRouter = Backbone.Router.extend({
	routes: {
		"": "showListsIndex"
	},

	showListsIndex: function() {
		var indexView = new TodoApp.Views.ListsIndex({
			collection: TodoApp.lists
		});


		$("#backbone-body").html(indexView.render().$el);
	}
})