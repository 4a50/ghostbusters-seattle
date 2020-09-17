'use strict'

function ScaredOfGhosts() {
    var scaredOfGhosts = confirm("Click OK if you accept the paranormal.  If not press cancel");
    if (scaredOfGhosts == true) {
        alert("You have come to the RIGHT PLACE!");
    }
    else {
        location.href = "https://www.calm.com/"
    }
}

function nameInput() {
    var nameOutput;
    var name = prompt("Request you NAME please");
    if (name == "") {
        nameOutput = "<h1>" + "HELLO!" + "!" + "</h1>";
        console.log(typeof (4 + '93'));
    } else {
        nameOutput = "<h1>" + name + "!" + "</h1>";
    }
    return nameOutput;

}

function loc() {
    var loc = prompt("Are you from Seattle?");
    var locChar = loc.charAt(0).toUpperCase();


    if (locChar === "Y" || locChar == null) {
        var h2Output = "<h1 id=\"titleText\">" + "Is there something Strange in the Neighborhood? You're next event IS!" + "</h1>";
    }
    else {
        var h2Output = "<h1 id=\"titleText\">" + "Is there something Strange in YOUR AREA? Your next event could be!  We can travel!" + "</h1>";
    }
    return h2Output;
}

function headerText() {
    ScaredOfGhosts();
    document.write(nameInput());
    document.write(loc());
}
