// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(function (driverName) {
       return driverName.toLowerCase() === name.toLowerCase()
 } )
     };

Console.log(driverName);

function fuzzyMatch(drivers, letter) {
   let filteredNames = drivers.filter(function(word) {
         return word.charAt(index(0)) === letter;
      });
      return filteredNames;
  };

Console.log(filteredNames);
