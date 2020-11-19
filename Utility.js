class UtilityGamblerSimulation {
    constructor() {
        this.dailyStake = 100
        this.bet = 1
        this.win = 0;
        this.lose = 0;
        this.totalDays = 0;
        this.totalAmount = 0;
        this.MAX_DAYS = 30;
        this.dailyAmount = [];
        this.newStake = 0;
        this.finalAmt = 0;
        this.tempWin = 0;
        this.tempLose = 0;
        this.luckiestDay = 0;
        this.unluckiestDay = 0;
        this.totalBetAmount = 300;
    }
    checkWinOrLoose() {
        return Math.floor(Math.random() * Math.floor(1));
    }
    /**
     * Checking the condition 
     * between 150 & 50 of stake amount in 
     * @params(dailyStake)
     */
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
            if (this.win > this.tempWin && this.dailyStake == 150) {
                this.tempWin = this.win;
                this.luckiestDay = this.totalDays;
            }
            if (this.lose > this.bestLose && this.dailyStake == 50) {
                this.tempLose = this.lose;
                this.unluckiestDay = this.totalDays;
            }
            this.win = 0;
            this.lose = 0;
        }
    }
    //Calling the checkWinOrLoose method 30 times//
    resultAfter30Days() {
        try {
            for (day = 1; day <= this.MAX_DAYS; day++) {
                console.log("Day:" + this.totalDays);
                this.gambleWinOrLoose();
                this.totalAmount = this.totalAmount + this.dailyStake;
                this.dailyAmount[this.totalDays] = this.totalAmount;
                this.finalAmt = this.finalAmt + this.totalAmount;
                this.dailyStake = 100;
            }
            console.log("Total Days: " + this.totalDays + " Total amount: " + this.totalAmount);
            console.log("Luckiest Day: " + this.luckiestDay + " Unluckiest Day: " + this.unluckiestDay)

        }
        catch (e) {
            console.log("Exception: " + e);
        }

    }

    printDailyAmt() {
        var day
        for (day = 1; day <= this.MAX_DAYS; day++) {
            console.log("Final Amount On Day" + day + " " + this.dailyAmount[day]);
        }
    }

   /**
    * Calculation of won or lost amount per day
    *  */ winOrLose() {
        for (day = 1; day <= this.MAX_DAYS; day++) {
            if (this.finalAmt < this.dailyStake)
                console.log("You lost by" + day + " " + (this.dailyStake - this.finalAmt));
            else
                console.log("You won by" + day + " " + (this.finalAmt - this.dailyStake));
        }

    }
}
module.exports = new UtilityGamblerSimulation();