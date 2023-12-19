var Soma = require("./soma");

var LoopWithSum = function(num1,num2) {
	var sum = Soma(num1 , num2);
	while(sum <= num2*10) {
		console.log(sum);
		sum++;
	}
}

module.exports = LoopWithSum;
