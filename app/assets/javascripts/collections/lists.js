TodoApp.Collections.Lists = Backbone.Collection.extend({
	model: TodoApp.Models.List,

	url: "/lists"
});