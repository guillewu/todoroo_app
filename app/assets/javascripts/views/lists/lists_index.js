TodoApp.Views.ListsIndex = Backbone.View.extend({
	template: JST["lists/index"],

	initialize: function() {
		this.listenTo(this.collection, "add remove sync change", this.render);
	},

	events: {
		"click .new-list": "createNewList",
		"submit form.create-list": "saveList",
		"drop h2": "boxAction"
	},

	render: function() {
		var renderedContent = this.template();
		this.$el.html(renderedContent);

		var that = this;

		this.collection.forEach(function(list) {

			var listShow = new TodoApp.Views.ListShow({
				model: list
			});
			listShow.render();
			that.$el.append(listShow.$el);
		});

		var box = new TodoApp.Views.ShowBox();
		box.render();
		that.$el.append(box.$el);

		return that;
	},

	createNewList: function() {
		var newView = new TodoApp.Views.ListNew();
		newView.render();
		this.$el.append(newView.$el);
	},

	saveList: function(event) {
		event.preventDefault();

		var data = $(event.currentTarget).serializeJSON();
		var list = new TodoApp.Models.List(data);

		list.save({}, {
			success: function() {
				TodoApp.lists.add(list);
			},

			error: function(model, resp) {
				console.log(resp);
			}
		});
	},

	boxAction: function(event, ui) {
		var noteId = $(event.toElement).attr("data-note-id");
		var listId = $(event.toElement).attr("data-list-id");

		if (noteId) {
			var notes = this.collection.findWhere({"id": parseInt(listId)}).get("notes");

			notes.get(noteId).destroy({
				wait: true,
				success: function () {
					$(event.toElement).remove();
					console.log("succes");
				},
				errors: function() {
					console.log("error");
				}
			});

		} else if (listId) {
			this.collection.findWhere({"id": parseInt(listId)}).destroy({
				wait: true,
				success: function() {
					console.log("success");
				}
			})
		}
	}
})

