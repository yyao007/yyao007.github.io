var todos = {};

todos.init = function () {
	todos.setTable();
};

todos.setTable = function () {
	// add to-do when hit enter
	$("input").on("keypress", function (e) {
		if (e.which === 13 && $(this).val()) {
			var todo = $(this).val();
			$(this).val("");
			var $tr = $("<tr>").append(
				$("<td>", {"class": "row-container"}).append(
					$("<div>", {"class": "todo", "text": todo}).prepend(
						"<span class='delete'><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></span>"
					)
				)
			);
			$("#list").append($tr);
		}
	});

	// get delete button work
	var $table = $("table");
	$table.on("click", ".delete", function (e) {
		e.stopPropagation();
		$(this).parent().parent().fadeOut(600, function () {
			$(this).remove();
		});
	});

	// get add button work
	$("#add").on("click", function () {
		$("#input-container").slideToggle(600);
	});

	// change style when click on a to-do
	$table.on("click", ".todo", function () {
		$(this).toggleClass("done");
	});
};










todos.init();



