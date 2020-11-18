const { totalAmount } = require('./Utility');
const Util = require('./Utility');
console.log("Welcome to Gambling simulation!");
Util.resultAfter20Days();
console.log("stake:",Util.dailyStake,"totalAmount",Util.totalAmount);