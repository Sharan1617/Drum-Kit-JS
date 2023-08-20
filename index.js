// function displayMsg() {
//   alert("Button clickedD");
// }
// function playSound(){
//     var audio = new Audio('./sounds/tom-1.mp3');
//     audio.play();
// }
// document.querySelector("button").addEventListener("click", displayMsg)
var buttonsArr = document.querySelectorAll(".drum");

//detecting button pressed on screen
//will work when button w,a etc etc are clicked on screen
for (var i = 0; i < buttonsArr.length; i++) {
  buttonsArr[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    addAnimation(buttonInnerHtml);
  });
}

//detecting keyboard key pressed
//here eventlistener is performed on entire docment instead like in first method even was on specific buttons, here i can press any buttn but button in seitch case will perform their actions
document.addEventListener("keypress", function (event) {
  // alert("Keyword pressed : "+event.key)
  var keypadPressed = event.key;
  makeSound(keypadPressed);
  addAnimation(keypadPressed);
});

function makeSound(key) {
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
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log("Wrong option selected : "+key);
  }
}
function addAnimation(currentKey) {
  var keyPress = document.querySelector("." + currentKey);
  keyPress.classList.add("pressed");

  setTimeout(function () {
    keyPress.classList.remove("pressed");
  }, 200);
}
