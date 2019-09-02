var argButtonName, buttonPaper, buttonRock, buttonScissors;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

/*function logButtonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
}*/

var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput, playerResult, computerResult;
var playerResult = 0;
var computerResult = 0;

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

buttonRock.addEventListener('click', function(){
  playGame('kamień')
 });
buttonPaper.addEventListener('click', function(){ 
  playGame('papier') 
});
buttonScissors.addEventListener('click', function(){
  playGame('nożyce')
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



