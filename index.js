// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(function (driverName) {
       return driverName.toLowerCase() === name.toLowerCase()
 } )
     };

Console.log(driverName);

function fuzzyMatch(drivers, letter) {
   return drivers.filter(name => name.indexOf(letter) === 0)

  };

function matchName(drivers, namePut) {
    return drivers.filter(item => item.name === namePut)
}