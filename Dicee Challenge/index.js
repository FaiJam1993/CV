var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Array of image URLs
var imageUrls = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

// Get the random image URL based on the random number generated
var randomImageUrl = imageUrls[randomNumber1 - 1];
var randomImageUrl2 = imageUrls[randomNumber2 - 1];

// Set the "src" attribute of the first HTML element with class "img1" to the random image URL
document.querySelector(".img1").setAttribute("src", randomImageUrl);
document.querySelector(".img2").setAttribute("src", randomImageUrl2);
//If Condition, who is the winning party.
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Unenschieden!🚩";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
