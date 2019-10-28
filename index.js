// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    // declare variable assigned to an anonymous function, which accepts one argument of type array, and 
    // slice's off the first 2 items of the array, non destructively, and returns it as an array.
        return arr.slice(0,2);
}

const returnLastTwoDrivers = function(arr) {
    // declare variable which is assigned to an anonymous function, which accepts an argument of an 
    // array of drivers and slices off 2 items of the array from the back of the array, non-destructively
    // and returns it as an array
    return arr.slice(-2);
}

const selectingDrivers = [
    // declare a variable which contains the two previous functions, allowing us to call either of them uses syntax:  
    //     selectingDrivers[0](drivers)
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

const createFareMultiplier = function (multiplyBy) {
    // returns a function that that takes a value and multiplies it by 'multiplyBy' 
    return function (value) {
        return multiplyBy * value;
    }
}

const fareDoubler = createFareMultiplier(2);
// multiplies value by 2

const fareTripler = createFareMultiplier(3);
// multiplies value by 3

const selectDifferentDrivers = function (driverArray, chosenFunction) {
    return chosenFunction(driverArray);

    // allows you to pass an array and function as arguments and have that function execute with the array as an argument, returning result of the function
}