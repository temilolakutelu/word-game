window.onload = function () {
	let words = [
		{ name: "language", value: ["age", "gauge", "angel", "gang", "glue", "egg"] },
		{ name: "crave", value: ["carve", "cave", "rave", "care", "race", "are", "era", "car", "ear", "arc"] },
		{ name: "nation", value: ["anoint", "into", "iota", "inn", "not", "tin", "ton", "oat", "ion"] },
		{ name: "purpose", value: ["supper", "upper", "pup", "pop", "pure", "pour", "soup", "spur", "ore"] },
	];

	let chosenWord = null;
	let level = 0;
	function init() {
		document.getElementById("genWord").innerHTML = "";
		let y = document.getElementsByClassName("letIn");
		for (let i = 0; i < y.length; i++) {
			y[i].innerHTML = "";
		}
		chosenWord = words[level];
		console.log(chosenWord);
		level++;
		genWord();
	}
	init();

	function genWord() {
		for (let i = 0; i < chosenWord.name.length; i++) {
			let myWord = document.createElement('div');
			let myWordText = document.createTextNode(chosenWord.name[i]);
			myWord.appendChild(myWordText);
			let MyWordStyle = myWord.style;
			myWord.style.display = "inline-block";
			myWord.style.border = "1px solid gray";
			myWord.style.width = "30px";
			myWord.style.margin = "10px 2px";
			myWord.style.backgroundColor = " rgba(141, 15, 15, 0.842)";
			myWord.style.borderRadius = "10px";
			myWord.style.boxShadow = "1px 1px 2px 3px,-1px -1px 2px 3px";
			document.getElementById("genWord").appendChild(myWord);
			let count = chosenWord.value.length;
			document.getElementById("count").innerText = "Number of words expected:  " + count;
			ansWord();
		}

	}
	function ansWord() {
		let btn = document.getElementById("btn");
		btn.addEventListener('click', function (e) {
			e.preventDefault();
			let copyText = document.getElementById("myInput");
			let answer = copyText.value;
			console.log(answer);

			for (let i = 0; i < chosenWord.value.length; i++) {
				if (answer === chosenWord.value[i] && answer.length === 3) {
					let paste = document.createElement('div');
					paste.style.width = "40px";
					paste.style.height = "30px";
					paste.style.border = "1px solid gray";
					paste.style.margin = "5px 0 0 5px";
					paste.style.backgroundColor = " rgba(141, 15, 15, 0.842)";
					paste.style.borderRadius = "10px";
					paste.style.textAlign = "center";
					paste.style.fontSize = "20px";
					paste.style.color = "goldenrod";
					let pasteText = document.createTextNode(answer);
					paste.appendChild(pasteText);
					document.getElementById("threeletter").appendChild(paste);
					tracker();
				}
				else if (answer === chosenWord.value[i] && answer.length === 4) {
					let paste = document.createElement('div');
					paste.style.width = "40px";
					paste.style.height = "30px";
					paste.style.border = "1px solid gray";
					paste.style.margin = "5px 0 0 5px";
					paste.style.backgroundColor = "rgba(141, 15, 15, 0.842)";
					paste.style.borderRadius = "10px";
					paste.style.textAlign = "center";
					paste.style.fontSize = "20px";
					paste.style.color = " goldenrod";
					let pasteText = document.createTextNode(answer);
					paste.appendChild(pasteText);
					document.getElementById("fourletter").appendChild(paste);

					tracker();
				}
				else if (answer === chosenWord.value[i] && answer.length === 5) {
					let paste = document.createElement('div');
					paste.style.width = "50px";
					paste.style.height = "30px";
					paste.style.border = "1px solid gray";
					paste.style.margin = "5px 0 0 5px";
					paste.style.backgroundColor = "rgba(141, 15, 15, 0.842)";
					paste.style.borderRadius = "10px";
					paste.style.textAlign = "center";
					paste.style.fontSize = "20px";
					paste.style.color = "goldenrod";
					let pasteText = document.createTextNode(answer);
					paste.appendChild(pasteText);
					document.getElementById("fiveletter").appendChild(paste);
					tracker();
				}
				document.getElementById("myForm").reset();

				function tracker() {
					let x = chosenWord.value.indexOf(chosenWord.value[i]);
					chosenWord.value.splice(x, 1);
					if (chosenWord.value.length == 0)
						init();
				}
			}

		});
	}

}
