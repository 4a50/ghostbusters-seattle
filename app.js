'use strict'

function NameThatGhost() {
    //console.log("I am here!!!");
    var ghostGuess = "";
    while (ghostGuess.toUpperCase() !== 'SLIMER') {
        ghostGuess = prompt("Enter the name of the first ghost the Ghostbusters caught");
    }
    alert('Excellent! You guessed the little spud');
}
function guessNumber() {
    var correctNum = 7;
    var correctGuess = false;
    var userGuess = "";
    do {
        for (var i = 0; i < 5; i++) {
            userGuess = prompt("Ok. Guess a number between 0 and 10.  You have " + (5 - i) + " tries remaining");
            console.log(userGuess + "\t" + correctNum);
            if (userGuess == correctNum) {
                alert("Yes!  It was.  Ok now you can go to the site.  Good job rookie.");
                correctGuess = true;
                break;
            }
        }
        if (correctGuess === false) {
            alert("Too Many Tries!!!  Ahh, geez!  Try again why don't ya?");
        }

    }
    while (correctGuess === false) {

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
    document.write(nameInput());
    document.write(loc());
    ScaredOfGhosts();
}
function ScaredOfGhosts() {
    var scaredOfGhosts = confirm("Click OK if you accept the paranormal.  If not press cancel");
    if (scaredOfGhosts == true) {
        alert("You have come to the RIGHT PLACE!");
    }
    else {
        location.href = "https://www.lingscars.com/"
    }
}