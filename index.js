// Расчета по порядковым номерам в Array

var numberOfDrumButtons = document.querySelectorAll('.drum').length; //7

// Извлечения звука
function makeSound(key) {
  switch (key) {

    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case 'k':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case 'l':
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log(key + ' is not a hotkey!');
  }
};

// Анимация

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector('.' + currentKey);

  activeButton.classList.add('pressed');

  setTimeout(function(){
    activeButton.classList.remove('pressed');
  }, 100);

}

// Излечение звука мышью
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function(buttonInnerHTML) {

    var buttonInnerHTML = this.innerHTML;

    this.blur();

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  })
};

//Извлечение звука клавиатурой
document.addEventListener('keydown', function(event) {

// Создаем OUTPUT независимый от раскладки
  var keyboardButton = event.code;
  keyboardButton = keyboardButton.split('Key').join('').toLowerCase();
// Output  создан

  makeSound(keyboardButton);

  buttonAnimation(keyboardButton);
});

// Переключение режимов 
function changeMode() {
  const body = document.body;
  const h1 = document.querySelector('h1');
  const footer = document.querySelector('footer');

  body.classList.toggle("light-mode");
  h1.classList.toggle("light-mode");
  footer.classList.toggle("light-mode");
}
