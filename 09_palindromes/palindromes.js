const palindromes = function (str) {
    strippedStr = str.replaceAll(/\W/g, '');
    upperStr = strippedStr.toUpperCase();
    for (let i = 0; i < upperStr.length; i++) {
        if (upperStr[i] === upperStr[upperStr.length - 1 - i]) {
            continue
        } else {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
