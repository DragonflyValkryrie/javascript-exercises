const sumAll = function(num1, num2) {
    let maxValue = Math.max(num1, num2);
    let sum = 0;
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (typeof num1 === "number" && typeof num2 === "number") {
        for (let i = 0; i <= maxValue; i++) {
            sum += i;
        }
        return sum;
    }
    else {
        return "ERROR";
    }
    

};

// Do not edit below this line
module.exports = sumAll;
