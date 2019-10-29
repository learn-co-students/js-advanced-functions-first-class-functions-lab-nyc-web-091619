// Code your solution in this file!
// function returnFirstTwoDrivers(drivers, newDrivers) {
//     newDrivers = []
//     newDrivers.push(drivers.slice(0,2))
//     return newDrivers
// }

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
    return function (num) {
        return multiplier * num
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, selectDrivers) {
    return selectDrivers(drivers)
}