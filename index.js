// Code your solution in this file!

// returnFirstTwoDrivers()
// ✓ should return a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
}

// returnLastTwoDrivers()
// ✓ should return an array of the last two drivers
const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2);
}

// selectingDrivers
// ✓ has the `returnFirstTwoDrivers` function to as its first element
// ✓ has the `returnLastTwoDrivers` function to as its last element
// ✓ allows us to invoke either function from the array
const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];


// createFareMultiplier()
// ✓ returns a function
// ✓ should multiply a given value using the created multiplier
const createFareMultiplier = function (multiplyValue){
    return function (value){
        return multiplyValue * value;
    };
};

// fareDoubler()
// ✓ is a function
// ✓ doubles fares
const fareDoubler = createFareMultiplier(2);


// fareTripler()
// ✓ is a function
// ✓ triples fares
const fareTripler = createFareMultiplier(3);


// selectDifferentDrivers(arrayOfDrivers, function)
// ✓ returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
// ✓ returns the last two drivers when passed returnLastTwoDrivers() as the second argument
const selectDifferentDrivers = function (drivers, whichDrivers){
    return whichDrivers(drivers);
}