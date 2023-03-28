//Überprüfen, ob ein Button gedrückt wurde
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    playsound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
   
  });
}
//Überprüfen,ob Tastenauf dem Keyboard gedrückt wurden.
document.addEventListener("keydown", function(event) {
    var keyPressed = event.key;
    playsound(keyPressed);
    buttonAnimation(event.key);
  
  });
  //switch die Tasten auf den Keyboard um andere Töne zu spielen.  
  function playsound(key) {
    switch (key) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
        case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
        case "j":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
        case "k":
          var kickBass = new Audio("sounds/kick-bass.mp3");
          kickBass.play();
          break;
        case "l":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
        default:
          console.log(key);
  }
}
// Eine Animationsfunktioniert, die Vorgiebt was zutun ist wenn man auf eine der Tasten drückt.
function buttonAnimation(currentkey) {
    var activeButton=document.querySelector("."+ currentkey);

    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");

    }, 100);
}