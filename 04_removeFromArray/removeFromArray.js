const removeFromArray = function(array, ...element) {
        return array.filter(value => !element.includes(value))
};

// Do not edit below this line
module.exports = removeFromArray;
