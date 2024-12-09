function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3){
        return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '!');

    if (argComputerMove === argPlayerMove) {
        printMessage('Remis!');
        winCounter();
    } else if (
        (argComputerMove === 'kamień' && argPlayerMove === 'papier') ||
        (argComputerMove === 'papier' && argPlayerMove === 'nożyce') ||
        (argComputerMove === 'nożyce' && argPlayerMove === 'kamień')
    ) {
        printMessage('Ty wygrywasz!');
        winCounter('win');
    } else {
        printMessage('Ja wygrywam!');
        winCounter('lose');
    }
}

function winCounter(result){
    if (result ==='win'){
        win = win + 1;
    }
    else if (result === 'lose'){
        lose = lose + 1;
    }

    
    printMessage('Gracz ' + win + ' : ' + lose + ' Bot');
}