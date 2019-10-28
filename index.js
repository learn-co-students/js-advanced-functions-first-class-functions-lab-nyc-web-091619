function returnFirstTwoDrivers(arr) {
  return arr.slice(0, 2);
}

function returnLastTwoDrivers(arr) {
  return arr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function(num2) {
    return num * num2;
  };
}

const fareDoubler = num => num * 2;

const fareTripler = num => num * 3;

function selectDifferentDrivers(arr, fn) {
  return fn(arr);
}
