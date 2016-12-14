
'use strict'

///// Task 1

console.log('Task 1');

 function getDay (number, one, two, three) {
      
    if (number >= 5 && number <= 20) {
        return three;
    } else if (number == 1) {
        return one;
    } else if (number >= 2 && number <= 4) {
        return two;
    }
    return three;
} 
console.log(getDay(1,  'день', 'дня', 'дней'));
console.log(getDay(22,  'день', 'дня', 'дней'));
console.log(getDay(29,  'день', 'дня', 'дней'));




///// Task 2

console.log('Task 2');
var x = 16;
var sum = 0;
while (x > 0) {
    sum = sum + x%10; 
    x = Math.floor(x/10);
}

console.log(sum);



///// Task 3

console.log('Task 3');

function curry(a) {
  return function (b) {
     return a + b; 
  };
}
 
var x = curry(2);
console.log(x(-5)); 