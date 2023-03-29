var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//  Ein Array von image URLs
var imageUrls = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

// Hier wird anhand von wirklüchen Nummer eine Reihenfolge von URL erzeugt.
var randomImageUrl = imageUrls[randomNumber1 - 1];
var randomImageUrl2 = imageUrls[randomNumber2 - 1];

// Setze bei Eintritt die ersten zwei Images als Eintritts URL
document.querySelector(".img1").setAttribute("src", randomImageUrl);
document.querySelector(".img2").setAttribute("src", randomImageUrl2);
//If Condition, who is the winning party.
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Unenschieden!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
