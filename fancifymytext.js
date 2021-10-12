function popUpAlert() {
    alert("Hello, world!");
    document.getElementById("text").style.fontSize = "2em";
}

function radioButton() {
    alert("HEAVEN OR HELL LET'S ROCK");
    if(document.getElementById('fancySchmancy').checked) {
        document.getElementById("text").style.fontWeight = "bold";
        document.getElementById("text").style.color = "blue";
        document.getElementById("text").style.textDecoration = "underline";
    }
    else if(document.getElementById('boringBetty').checked) {
        document.getElementById("text").style.removeProperty("font-weight");
        document.getElementById("text").style.removeProperty("color");
        document.getElementById("text").style.removeProperty("text-decoration");
    }
}

function moo() {
    document.getElementById("text").style.textTransform = "uppercase";
    var str = document.getElementById("text").value;
    var parts = str.split(".");
    str = parts.join(" -moo.");
    document.getElementById("text").value = str;
}
