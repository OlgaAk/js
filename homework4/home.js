'use strict'

///// Task 1

var strWithBla = 'String with "bla-bla-bla"';
var blaStr = 'bla';

var	count = 0;
var pos = strWithBla.indexOf(blaStr);
while ( pos != -1 ) {
   count++;
   pos = strWithBla.indexOf(blaStr,pos+1);
}

console.log(count); 


/////

function countStr (str, substr) {
var	count = 0;
var pos = str.indexOf(substr);
while ( pos != -1 ) {
   count++;
   pos = str.indexOf(substr,pos+1);
}
console.log(count);   
}

countStr("Hello, lola", "lo");



///// Task 2

var city1 = {
  name: 'Paris',
  population: 12000,
  mayor: 'Barak',
  calcPop: function (population) {
    this.population += city2.population - population;
  }
  
};
var city2 = {};
city2.name = '';
city2.population = 2500;
city2.mayor = 'John';

console.log(city1, city2);
city1.calcPop(10000);
console.log(city1.population);



var president = {
  changeMayor: function (city, newMayor) {
    city.mayor = newMayor;
  }
}

president.changeMayor(city1,'Peter');
console.log(city1);

///// Task 3

 
// function getDataFromUser() {
//  var data = prompt('Please enter a number')
// var array = [];
// if (typeof data !== 'number') {
//    console.log('Please enter a number')
// return false;  
// } else if (typeof data === 'number')  {
//   array.push(data);
//    console.log(array);
//    return true;
//     console.log('Please enter an operator');
//   } else if (data !== '+' || data !== '-' || data !== '*' || data !== '/') {
//       console.log('Please enter an operator')
//       return false;  
//       } else {
//         array.push(data);
//         console.log(array);
//    }
// }


// getDataFromUser();





