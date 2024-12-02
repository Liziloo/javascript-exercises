const repeatString = function(string, num) {
    let buildString = '';
    if (num < 0) {
        return 'ERROR'
    }
    for (let i = 0; i < num; i++) {
        buildString += string;
    }
    return buildString
};

// Do not edit below this line
module.exports = repeatString;
