let win = 0;
let lose = 0;

function playGame(playerInput){
    clearMessages();
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    console.log('Gracz wpisał: ' + playerInput);

    let argComputerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + argComputerMove)

    let argPlayerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + argPlayerMove);

    displayResult(argComputerMove, argPlayerMove);
}

document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
});

