const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

const stone = 'kamien';
const paper = 'papier';
const scissors = 'nożyce';

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return stone;
  } else if (argMoveId == 2) {
    return paper;
  } else if (argMoveId == 3) {
    return scissors;
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return stone;
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == paper && argComputerMove == stone) {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == stone && argComputerMove == scissors) {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == scissors && argComputerMove == paper) {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

buttonRock.addEventListener('click', function(){
  playGame(stone)
 });
buttonPaper.addEventListener('click', function(){ 
  playGame(paper) 
});
buttonScissors.addEventListener('click', function(){
  playGame(scissors)
});

function playGame(playerMove) {
  //playerMove = argButtonName;
  clearMessages();
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}



