'use strict'

console.log('операторы ветвления')

// логические операторы || && !
// 0 '' Nan null undifined --- false

var year = 2009;
var answer = (year >= 2000 && year <= 2008) ? 'both are true' : 'at least one is false';
console.log(answer);

answer = (year < 2000 || year > 2008) ? 'one is true' : 'none is true';
console.log(answer);

var boo = true;
console.log(!boo); //not smth

// 5 > 7 ? 'OK' : "Not OK" : 5 < 7 ? 'now ok';

var date = new Date();
var month = date.getMonth();
var yearTimes = (month == 11 || month <= 1) ? 'winter' :
        (month >= 2 || month <= 4 ) ?  'spring' :
        (month <= 5 || month <= 7) ? 'summer' : 'autumn';
console.log(yearTimes);



if (month == 11 || month <= 1) { 
yearTimes = 'winter';
console.log('Winter background image')
} else if (month >= 2 || month <= 4) {
yearTimes = 'spring';
console.log('Spring background image')
} else if (month <= 5 || month <= 7) {
yearTimes = 'summer';
console.log('Summer background image')
} else {
    yearTimes = 'autumn';
console.log('Autumn background image')
}


switch(yearTimes) {
    case 'spring':
    console.log('spring');
    break;
    case 'summer':
    console.log('summer');
    default:
    console.log('no idea');
}