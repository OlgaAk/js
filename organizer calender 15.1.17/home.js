(function (global) {
'use strict'

var calenderDiv = document.getElementById('calender');

var currentDate = new Date();
var currentMonth = currentDate.getMonth();
var currentYear = currentDate.getFullYear();
console.log(currentMonth);

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}

// function findWeekday (currentMonth) {
//    getWeekDay
// }

console.log(currentDate);

var daysInCurrentMonth = daysInMonth(currentMonth, currentYear);

console.log(daysInCurrentMonth);

function createCalender (daysInCurrentMonth) {

for (var i = 0; i < daysInCurrentMonth; i++) {

var cDay = document.createElement('div');
cDay.setAttribute('class', 'calenderDay');
var dayNumP = document.createElement('p');
var dayNumT = document.createTextNode(i+1);
cDay.setAttribute('id', i+1);
var cSpan = document.createElement('span');
cSpan.setAttribute('class', 'dayPlans');
dayNumP.appendChild(dayNumT);
cDay.appendChild(dayNumP);
cDay.appendChild(cSpan);
calenderDiv.appendChild(cDay);
}

}


function findMonday () {

    for (var i = 0; i < 7; i++) {
    var thatDate = new Date (currentYear, currentMonth, i);
var thatDateofWeek = thatDate.getDay();
console.log(thatDateofWeek);

if (thatDateofWeek === 0) {
    return;
}
var cDay = document.createElement('div');
cDay.setAttribute('class', 'calenderDay');

var dayNumP = document.createElement('p');
cDay.appendChild(dayNumP);
calenderDiv.appendChild(cDay);

}
}

findMonday();
createCalender(daysInCurrentMonth);

} (window));

