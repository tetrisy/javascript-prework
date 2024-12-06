function caluclateChange(argPrice, argPaidAmount) {
    console.log('wtowłano calcualteChange');
    console.log('argumenty: ' + argPrice + ', ' + argPaidAmount);
    return argPaidAmount - argPrice;
}

let change1 = caluclateChange (13, 20);
printMessage('Reszta: ' + change1);