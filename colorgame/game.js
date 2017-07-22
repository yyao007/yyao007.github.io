
var tilesDisplay = document.querySelectorAll(".tile");


level = 6;
newGame(level);



function newGame(n) {
	var tiles = [];
	for (var i = 0; i < n; ++i) {
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		var color = "rgb(" + r + ", " + g + ", " + b + ")";
		tiles.push(color);
	}

	tiles.forEach(function (t, i) {
		tilesDisplay[i].style.background = t
	})


}

document.querySelector(".new").addEventListener("click", function () {
	level = document.querySelector(".btn-active");
});
