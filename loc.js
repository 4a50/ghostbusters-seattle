var loc = prompt("Are you from Seattle?");
var locChar = loc.charAt(0);
console.log(typeof locChar);

if (locChar == "y" || locChar == "Y" || locChar == null) {
    document.write("<h1 id=\"titleText\">" + "Is there something Strange in the Neighborhood? You're next event IS!" + "</h1>");
}
else {
    document.write("<h1 id=\"titleText\">" + "Is there something Strange in YOUR AREA? Your next event could be!  We can travel!" + "</h1>"); d
}