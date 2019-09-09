function printMessage(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function displayBattleResult(playerResult, computerResult) {
	const computerDiv = document.getElementById('computer-result');
	const playerDiv = document.getElementById('player-result');
	computerDiv.innerHTML = 'Computer result: ' + computerResult;
	playerDiv.innerHTML = 'Player result: ' + playerResult;
}