function randomInt() {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    let result = Math.floor(Math.random()*(max-min+1)+min);
    document.getElementById("result").innerHTML = result;
}