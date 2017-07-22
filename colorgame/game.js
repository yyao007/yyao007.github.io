
var tilesDisplay = document.querySelectorAll(".tile");
var btnEasy = document.querySelector("#easy");
var btnHard = document.querySelector("#hard");
var btnNew = document.querySelector("#new");
var title = document.querySelector(".title");
var hint = document.querySelector("#hint");
var h1 = document.querySelector("h1");

level = {
	"easy": 3,
	"hard": 6
};

var tiles = [];
var answer;
var defaultBackground = "rgb(66, 117, 183)"
var currLevel = "hard";
newGame(currLevel);

function newGame(button) {
	var n = level[button];
	tiles = [];
	for (var i = 0; i < n; ++i) {
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		var color = "rgb(" + r + ", " + g + ", " + b + ")";
		tiles.push(color);
	}

	tiles.forEach(function (t, i) {
		tilesDisplay[i].disabled = false;
		tilesDisplay[i].style.background = t
	});
	title.style.background = defaultBackground;

	var index = Math.floor(Math.random() * (n-1));
	answer = tiles[index];
	h1.textContent = answer;
	btnNew.textContent = "New Color";
	hint.textContent = "";
}

btnNew.addEventListener("click", function () {
	newGame(currLevel);
});

btnHard.addEventListener("click", function () {
	if (currLevel !== "hard") {
		currLevel = "hard";
		this.classList.add("btn-active");
		btnEasy.classList.remove("btn-active");
	}
	newGame(currLevel);
});

btnEasy.addEventListener("click", function () {
	if (currLevel !== "easy") {
		currLevel = "easy";
		this.classList.add("btn-active");
		btnHard.classList.remove("btn-active");
		for (var i = 3; i < tilesDisplay.length; ++i) {
			tilesDisplay[i].style.background = "rgba(0, 0, 0, 0)";
			tilesDisplay[i].disabled = true;
		}
	}
	newGame(currLevel);
});

for (var i = 0; i < tilesDisplay.length; ++i) {
	tilesDisplay[i].addEventListener("click", function () {
		var color = this.style.background;
		if (color === answer) {
			title.style.background = color;
			for (var i = 0; i < tiles.length; ++i) {
				tilesDisplay[i].style.background = color;
				tilesDisplay[i].disabled = true;
			}
			hint.textContent = "Correct!";
			btnNew.textContent = "Play again?"
		}
		else {
			this.style.background = "rgba(0, 0, 0, 0)";
			this.disabled = true;
			hint.textContent = "Try Again";
		}
		tiles[i] = "";
	})
}
