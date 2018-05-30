window.onload = function () {
    var words = [{ name: "physics", value: ["shy", "sip"] },
    { name: "navigator", value: ["nav", "aviator"] },
    { name: "language", value: ["age", "lang"] }];
    var randNum = Math.floor(Math.random() * 3);
    var chosenWord = words[randNum];
    console.log(chosenWord);
    genWord();

    function genWord() {
        for (let i = 0; i < chosenWord.name.length; i++) {
            var myWord = document.getElementById("genWord");
            var myWordText = document.createTextNode(chosenWord.name[i]);
            myWord.appendChild(myWordText);
            var count = chosenWord.value.length;
            document.getElementById("count").innerText = "Number of words expected:" + count;
        }
    }


    var tracker;
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
                tracker();
                var paste = document.createElement('div');
                paste.style.width = "30px";
                paste.style.height = "20px";
                paste.style.border = "1px solid gray";
                paste.style.margin = "5px 0 0 5px";
                var pasteText = document.createTextNode(answer);
                paste.appendChild(pasteText);
                document.getElementById("threeletter").appendChild(paste);

            }
            else if (answer == chosenWord.value[i] && answer.length == 4) {
                tracker();
                var paste = document.createElement('div');
                paste.style.width = "40px";
                paste.style.height = "20px";
                paste.style.border = "1px solid gray";
                paste.style.margin = "5px 0 0 5px";
                var pasteText = document.createTextNode(answer);
                paste.appendChild(pasteText);
                document.getElementById("fourletter").appendChild(paste);
            }
            else if (answer == chosenWord.value[i] && answer.length == 5) {
                tracker();
                var paste = document.createElement('div');
                paste.style.width = "50px";
                paste.style.height = "20px";
                paste.style.border = "1px solid gray";
                paste.style.margin = "5px 0 0 5px";
                var pasteText = document.createTextNode(answer);
                paste.appendChild(pasteText);
                document.getElementById("fiveletter").appendChild(paste);
            }
            document.getElementById("myForm").reset();
            function tracker() {
                var x = chosenWord.value.indexOf(chosenWord.value[i]);
                console.log(x);
                chosenWord.value.splice(x, 1);
                console.log(chosenWord.value);
            }

        }
        if (chosenWord.values.length == 0) {

        }



    });












}