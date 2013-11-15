window.TodoApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	TodoApp.lists = new TodoApp.Collections.Lists();
  	TodoApp.lists.fetch({
  		success: function() {
  			new TodoApp.AppRouter();
  			Backbone.history.start();
  		}
  	});
  }
};

$(document).ready(function(){

  TodoApp.initialize();
  
});
