let diceroll = 0;

function roll() {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    diceroll = dice1 + dice2;
    console.log('Result: ' + diceroll);
    document.getElementById("message").innerHTML = "";
    document.getElementById("out").innerHTML = "";
}

function guess(est) {
    let message = "";
    let cashOut = "";
    let cash_str = document.getElementById('cash').value;
    let cash = Number(cash_str);
    
    if (diceroll === 0) {
        message = "Please roll the dice first!";
    } else if (est === 'under' && diceroll < 7) {
        message = "You are correct! The result was under 7.";
        cash *= 2;
        cashOut = "Congratulations you earned... Rs." + cash;
    } else if (est === 'equal' && diceroll === 7) {
        message = "You are correct! The result was equal to 7.";
        cash *= 2;
        cashOut = "Congratulations you earned... Rs." + cash;
    } else if (est === 'over' && diceroll > 7) {
        message = "You are correct! The result was over 7 .";
        cash *= 2;
        cashOut = "Congratulations you earned... Rs." + cash;
    } else {
        message = "Incorrect! The result was " + diceroll + ".";
        cash *= 0;
        cashOut = "Better luck next time.";
    }
    
    document.getElementById("message").innerHTML = message;
    document.getElementById("out").innerHTML = cashOut;
}