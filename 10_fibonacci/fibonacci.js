const fibonacci = function(num) {
    num = Number(num);
    if (isNaN(num) || num === 0) {
        return 0;
    }
    if (num < 0) {
        return 'OOPS'
    }
        
    let firstNum = 0;
    let secondNum = 1;
    for (let i = 1; i < num; i++) {
        let temp = secondNum;
        secondNum = firstNum + secondNum;
        firstNum = temp;
    }
    return secondNum;
    
};

// Do not edit below this line
module.exports = fibonacci;
