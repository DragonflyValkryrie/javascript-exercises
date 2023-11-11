const fibonacci = function(n) {
    if (n < 0) return "OOPS";

    let fibPrev = 0;
    let fibCurrent = 1;
  
    for (let i = 2; i <= n; i++) {
      let temp = fibCurrent;
      fibCurrent = fibPrev + fibCurrent;
      fibPrev = temp;
    }

    return fibCurrent;
};

// Do not edit below this line
module.exports = fibonacci;
