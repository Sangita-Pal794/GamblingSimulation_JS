class UtilityGamblerSimulation {
    
    constructor(win, lose) {
        this.dailyStake = 100
        this.bet = 1
        this.win = win;
        this.lose = lose;
        this.totalDays = 0;
        this.totalAmount = 0;
    }
    checkWinOrLoose() {
        return Math.floor(Math.random() * Math.floor(1));
    }
    gambleWinOrLoose() {
        let result = this.checkWinOrLoose();

        while (this.dailyStake <= 150 && this.dailyStake >= 50) {
            if (result == 1) {
                this.win += 1;
                this.dailyStake += 1;
                console.log("You won 1 dollar")
            }
            if (result == 0) {
                this.lose += 1;
                this.dailyStake -= 1;
                console.log("You lost 1 dollar")
            }

        }
    }
    //Calling the checkWinOrLoose method 20 times//
    resultAfter20Days() {
        try {
            while (this.totalDays < 20) {
                console.log("Day:" + this.totalDays);
                this.checkWinOrLoose();
                this.totalAmount = this.totalAmount + this.dailyStake;
                this.dailyStake = 100;
                this.totalDays++;
            }
            console.log("Total Days: " + this.totalDays);
        }
        catch (e) {
            console.log("Exception: " + e);
        }

    }

}
module.exports = new UtilityGamblerSimulation(0, 0);
