// Code your solution in this file!


    // declare const variable 'returnFirstTwoDrivers' and assign to an anonymous 
    // function, which accepts one argument of type array (named 'arr'), and uses
    // slice() method to take off 2 items, starting at the 0 index, and returning
    // a non destructively created array.
const returnFirstTwoDrivers = function(arr) {
        return arr.slice(0,2);
}

    // declare const variable 'returnLastTwoDrivers and assign it to an anonymous
    // function, which accepts an argument of type array (named 'arr').  It then
    // uses the slice() method on the array. We use a negative index here to indicate
    // an offset of 2 from the end of the sequence.  Since there is only 1 argument
    // slice() will extract through the end of the sequence(arr.length).  A new
    // array, nondestructively created, is returned containing the extracted elements.
const returnLastTwoDrivers = function(arr) {
    return arr.slice(-2);
}


    // declare a const variable which contains the two previous functions.  This allows
    // us to access either of these methods and pass the arguments they require, in this
    // case an array.  The syntax used to call these inside functions is:
    //     selectingDrivers[0](drivers)   //=> returnFirstTwoDrivers
    //     selectingDrivers[1](drivers)   //=> returnLastTwoDrivers
const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

    // declare a const variable that is assigned to an anonymous function that takes an
    // argument of type number.  The function returns a function that will multiply an
    // argument of type number sent to the inside function, by the multiplyBy value.

const createFareMultiplier = function (multiplyBy) {
    return function (value) {
        return multiplyBy * value;
    }
}

    // declare a const variable which is assigned to an anonymous function that will multiply
    // an argument of type number by 2, and return the product
const fareDoubler = createFareMultiplier(2);


    // declare a const variable which is assigned to an anonymous function that will multiply
    // an argument of type number by 3, and return the product
const fareTripler = createFareMultiplier(3);

    // declare a const variable and assign it to an anonymous function that takes two arguments
    // the first fo type array and the second of type function.  The anonymous function will then
    // pass the first argument (type: array) through the second argument (type: function) and 
    // return the result.
const selectDifferentDrivers = function (driverArray, chosenFunction) {
    return chosenFunction(driverArray);

}