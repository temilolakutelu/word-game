window.onload = function () {
    var words = [{ name: "physics", value: ["shy", "sip"] },
    { name: "purpose", value: ["supper", "upper", "pup", "pop", "pure", "pour", "soup", "spur", "ore"] },
    { name: "language", value: ["age", "lang"] }];
    wordLen = words.length;

    var chosenWord = null;
    var level = 0;
    function init() {

        document.getElementById("genWord").innerHTML = "";

        var y = document.getElementsByClassName("letIn");
        for (var i = 0; i < y.length; i++) {
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
            var myWord = document.createElement('div');
            var myWordText = document.createTextNode(chosenWord.name[i]);
            myWord.appendChild(myWordText);
            let MyWordStyle = myWord.style;
            myWord.style.display = "inline-block";
            myWord.style.border = "1px solid gray";
            myWord.style.width = "30px";
            myWord.style.margin = "10px 2px";
            myWord.style.backgroundColor = "green";
            myWord.style.borderRadius = "10px";
            myWord.style.boxShadow = "1px 1px 2px 3px,-1px -1px 2px 3px";

            document.getElementById("genWord").appendChild(myWord);
            var count = chosenWord.value.length;
            document.getElementById("count").innerText = "Number of words expected:  " + count;
            ansWord();
        }
        function ansWord() {
            var btn = document.getElementById("btn");
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                var copyText = document.getElementById("myInput");
                copyText.select();
                document.execCommand("copy");
                var answer = copyText.value;
                console.log(answer);

                for (let i = 0; i < chosenWord.value.length; i++) {

                    if (answer == chosenWord.value[i] && answer.length == 3) {
                        var paste = document.createElement('div');
                        paste.style.width = "40px";
                        paste.style.height = "30px";
                        paste.style.border = "1px solid gray";
                        paste.style.margin = "5px 0 0 5px";
                        paste.style.backgroundColor = "green";
                        paste.style.borderRadius = "10px";
                        paste.style.textAlign = "center";
                        paste.style.fontSize = "20px";
                        paste.style.color = "goldenrod";
                        var pasteText = document.createTextNode(answer);
                        paste.appendChild(pasteText);
                        document.getElementById("threeletter").appendChild(paste);
                        tracker();

                    }
                    else if (answer == chosenWord.value[i] && answer.length == 4) {

                        var paste = document.createElement('div');
                        paste.style.width = "40px";
                        paste.style.height = "20px";
                        paste.style.border = "1px solid gray";
                        paste.style.margin = "5px 0 0 5px";
                        paste.style.backgroundColor = "green";
                        paste.style.borderRadius = "10px";
                        paste.style.color = "goldenrod";
                        var pasteText = document.createTextNode(answer);
                        paste.appendChild(pasteText);
                        document.getElementById("fourletter").appendChild(paste);
                        var wordCount = wordCount + 1;
                        tracker();
                    }
                    else if (answer == chosenWord.value[i] && answer.length == 5) {

                        var paste = document.createElement('div');
                        paste.style.width = "50px";
                        paste.style.height = "20px";
                        paste.style.border = "1px solid gray";
                        paste.style.margin = "5px 0 0 5px";
                        paste.style.backgroundColor = "green";
                        paste.style.borderRadius = "10px";
                        paste.style.color = "goldenrod";
                        var pasteText = document.createTextNode(answer);
                        paste.appendChild(pasteText);
                        document.getElementById("fiveletter").appendChild(paste);
                        tracker();

                    }

                    document.getElementById("myForm").reset();
                    function tracker() {
                        var x = chosenWord.value.indexOf(chosenWord.value[i]);
                        console.log(x);
                        chosenWord.value.splice(x, 1);

                        console.log(chosenWord.value);
                        if (chosenWord.value.length == 0)

                            init();
                    }
                }

            });
        }

    }
}