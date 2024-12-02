

const removeFromArray = function(givenArray, element, ...moreElements) {
    let argArray = Array.from(moreElements);
    argArray.push(element);
    const spliceArray = [];
    for (let i = 0; i < givenArray.length; i++) {
        for (const arrayElement of argArray) {
            if (givenArray[i] === arrayElement) {
                spliceArray.push(i);
            }
        }
    }
    for (let j = (spliceArray.length - 1); j >= 0; j--) {
        givenArray.splice(spliceArray[j], 1);
    }
    return givenArray;
};

// Do not edit below this line
module.exports = removeFromArray;
