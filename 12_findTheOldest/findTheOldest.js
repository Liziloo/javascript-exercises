const findTheOldest = function(arr) {
    arr.sort(function(person1, person2) {
        const date = new Date();
        let year = date.getFullYear();
        let age1;
        let age2;
        if (person1.yearOfDeath) {
            age1 = Number(person1.yearOfDeath) - Number(person1.yearOfBirth);
        } else {
            age1 = year - Number(person1.yearOfBirth);
        }
        if (person2.yearOfDeath) {
            age2 =  Number(person2.yearOfDeath) - Number(person2.yearOfBirth);
        } else {
            age2 =  year - Number(person2.yearOfBirth);
        }
        
        return age2 - age1;
    });
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
