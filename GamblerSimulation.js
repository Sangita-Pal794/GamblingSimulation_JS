const Util = require('./Utility');
console.log("Welcome to Gambling simulation!");
Util.resultAfter30Days();
if (this.totalAmount > this.totalBetAmount) {
    console.log("Awasome!!You can continue gambling");
    let option = window.prompt("Enter if you want to continue next month(Y/N): ");
    if (option == "Y") {
        Util.resultAfter30Days();
    }
    else if (option == "N") {
        console.log("Well played!!");
    }
    else {
        console.log("Please enter valid option!!");
    }
}

else {
    console.log("Sorry!!You faced too much loss.Better luck nexttym.")
}
Util.printDailyAmt();
Util.winOrLose();