// Code your solution in this file!
function returnFirstTwoDrivers(array) {
    let result = [array[0], array[1]];
    return result;
}

function returnLastTwoDrivers(array) {
    let lastDriver = array[array.length - 1]
    let secondToLastDriver = array[array.length - 2]

    return [secondToLastDriver, lastDriver];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function multiply(num) {
        return num * num;
    }
}

function fareDoubler(num) {
    return num * 2;
}

function fareTripler(num) {
    return num * 3;
}

function selectDifferentDrivers(arrayOfDrivers, selectedFunction) {
    return selectedFunction(arrayOfDrivers);
}