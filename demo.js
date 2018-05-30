
var words = [{ name: "physics", words: ["shy", "sip"] },
{ name: "navigator", words: ["nav", "aviator"] },
{ name: "language", words: ["lang", "age"] }];
var randNum = Math.floor(Math.random() * 3);
var chosenWord = words[randNum];
console.log(chosenWord);


for (let i = 0; i < chosenWord.name.length; i++) {
    var myWord = document.getElementById("genWord");
    var myWordText = document.createTextNode(chosenWord.name[i]);
    myWord.appendChild(myWordText);

}

function myFunc() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
    alert("copied the text:" + copyText.value); console.log(copyText.value);
    var paste = document.getElementById("output");
    var pasteText = document.createTextNode(copyText.value);
    paste.appendChild(pasteText);
    document.getElementById("myForm").reset();
}