class UtilityGamblerSimulation {
    dailyStake = 100
    bet = 1

    constructor(win, lose) {
        this.win = win;
        this.lose = lose;
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

}
module.exports = new UtilityGamblerSimulation(0, 0);
