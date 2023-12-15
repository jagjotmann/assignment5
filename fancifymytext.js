function showAlert() {
    alert("Hello, world!");
}

function changeStyle() {
    var textArea = document.getElementById("textArea");
    if (document.getElementById("fancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boring").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function makeTextBigger() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function mooFunction() {
    var textArea = document.getElementById("textArea");
    textArea.value = textArea.value.toUpperCase();
    var sentences = textArea.value.split(".");
    for (var i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].trim() + "-Moo";
    }
    textArea.value = sentences.join(". ");
}

document.getElementById("biggerBtn").onclick = makeTextBigger;
document.getElementById("mooBtn").onclick = mooFunction;
