const sumAll = function(int1, int2) {
    if (int1 < 0 || int2 < 0 || !Number.isInteger(int1) || !Number.isInteger(int2)) {
        return 'ERROR';
    }
    let sum = 0;
    let i = 0;
    let j = 0;
    if (int1 < int2) {
        i = int1;
        j = int2;
    } else {
        i = int2;
        j = int1;
    }
    for (i; i <= j; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
