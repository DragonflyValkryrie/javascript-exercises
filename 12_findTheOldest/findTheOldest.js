const findTheOldest = function(array) {

    const oldest = array.reduce(function(oldest, currentPerson) {
        const oldestPersonAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        const currentPersonAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
        return currentPersonAge > oldestPersonAge ? currentPerson : oldest;
    });
    return oldest;
    
};
const getAge = function(death, birth){
    const date = new Date();
    const currentYear = date.getFullYear();
    if (death === undefined){
        return currentYear - birth;
    } else {
        return death - birth;
    }
        
    };
// Do not edit below this line
module.exports = findTheOldest;
