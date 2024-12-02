const reverseString = function(givenString) {
    reversed = '';
    for (i = (givenString.length - 1); i >= 0; i--) {
        const currentChar = givenString[i];
        reversed += currentChar;
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
