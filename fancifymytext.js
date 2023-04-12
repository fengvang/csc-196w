function bigger() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function pretty() {
    document.getElementById("textArea").style.fontWeight = "bold";
    document.getElementById("textArea").style.color = "blue";
    document.getElementById("textArea").style.textDecoration = "underline";
}

function boring() {
    document.getElementById("textArea").style.fontWeight = "normal";
    document.getElementById("textArea").style.color = "black";
    document.getElementById("textArea").style.textDecoration = "none";
    document.getElementById("textArea").style.fontSize = "inherit";
}

function moo() {
    var str = document.getElementById("textArea").value;
    var period = str.split(".");

    document.getElementById("textArea").value = period.join(" Moo.").toUpperCase();
}