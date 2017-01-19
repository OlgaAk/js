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
dayNumP.setAttribute('id', "p" + (i+1));
// var cSpan = document.createElement('span');
// cSpan.setAttribute('class', 'dayPlans');
dayNumP.appendChild(dayNumT);
cDay.appendChild(dayNumP);
// cDay.appendChild(cSpan);
calenderDiv.appendChild(cDay);
}

}


function findMonday () {

    for (var i = 0; i < 7; i++) {
    var thatDate = new Date (currentYear, currentMonth, i);
var thatDateofWeek = thatDate.getDay();
console.log(thatDateofWeek);

if (thatDateofWeek === 0) {
    console.log(i);
 for (var counter = 0; counter < (7-i); counter++) {
var cDay = document.createElement('div');
cDay.setAttribute('class', 'calenderDay');

var dayNumP = document.createElement('p');
cDay.appendChild(dayNumP);
calenderDiv.appendChild(cDay);
    
}

}
}}

var form = document.getElementById('divForm');


calenderDiv.addEventListener('click', function () { form.style.display = "block"; } );

var selectedDays = [];
var lessonDays = [2, 4, 6];
var currentLesson = ["Морской бой",  "Node.js", "Тема уточняется"]



function  getSelectedDays (lessonDays) {
      for (var i = 1; i <= daysInCurrentMonth; i++) {
    var thatDate = new Date (currentYear, currentMonth, i);
        var thatDateofWeek = thatDate.getDay();
        console.log(i);
         console.log(thatDateofWeek);
      
    for (var counter=0; counter < lessonDays.length; counter++)  {
if (thatDateofWeek == lessonDays[counter]) {
    console.log(thatDateofWeek);
    console.log(lessonDays);
    // cDay[i].setAttribute('class', 'calenderDay');
  selectedDays.push(i);
    console.log(selectedDays);
     var cDaySelected = document.getElementById(i);
   cDaySelected.className += " selectedDay";
   
   var plans = document.createTextNode(currentLesson[counter]);
   cDaySelected.appendChild(plans);
 }
 } } }


findMonday();
createCalender(daysInCurrentMonth);

getSelectedDays(lessonDays);

} (window));

