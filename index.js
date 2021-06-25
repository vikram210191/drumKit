
var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {            // adding event listerners to clicks(buttons)  and link it to make sound functin

    let buttoninnerHTML = this.innerHTML;

    makeSound(buttoninnerHTML);



    buttonAnimation(buttoninnerHTML);


  });

}

document.addEventListener("keydown", (event) => {                                             // adding event listener for keydown and link it to makeSound function

  makeSound(event.key);



  buttonAnimation(event.key);


});


function makeSound(key) {


  switch (key) {


    case "w":
      let tom1 = new Audio('tom-1.mp3');                              //like   if
      tom1.play();
      break;


    case "a":
      let tom2 = new Audio('tom-2.mp3');                              //like   if
      tom2.play();
      break;


    case "s":
      let tom3 = new Audio('tom-3.mp3');                              //like   if
      tom3.play();
      break;


    case "d":
      let tom4 = new Audio('tom-4.mp3');                              //like   if
      tom4.play();
      break;


    case "j":
      let snare = new Audio('snare.mp3');                              //like   if
      snare.play();
      break;


    case "k":
      let crash = new Audio('crash.mp3');                              //like   if
      crash.play();
      break;


    case "l":
      let kick = new Audio('kick-bass.mp3');                              //like  if
      kick.play();
      break;

    default: console.log(buttoninnerHTML);                                       //  like else statement
  }
}

function buttonAnimation(currentKey) {
  

  let activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    

    activeButton.classList.remove("pressed");

  }, 50);

}

// let audio = new Audio('sounds/tom-1.mp3');                              //
// audio.play();                                                           // to play sound (tom-1)


// document.addEventListener("keydown", function(event){                          //
//   alert(event);                                                          // to check keyboard keydown
// });
